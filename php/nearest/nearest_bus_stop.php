<?php 

require_once '../dbconfigyyc.php';

try{	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    /*if($pdo){
		echo "Connected to the <strong>$db</strong> database successfully!";
	}*/
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	# Variables: longitude, latitude
	$sql = 'SELECT stop_name, teleride, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.transit_bus_stops_csv_pts
ORDER BY  distance LIMIT 1';

	$sql = $sql . ";";


$longitude = false;
$latitude= false;
if(isset($_POST['longitude'])){
	$longitude = $_POST['longitude'];
$latitude = $_POST['latitude'];}

# Build SQL SELECT statement and return the geometry as a GeoJSON element
	$stmt = $pdo->prepare($sql);
	
	if (!$stmt) {
		echo "Prepare error";
}

// bind parameters with placeholders
$stmt->bindParam(':longitude', floatval($longitude));
$stmt->bindParam(':latitude', floatval($latitude));

# Try query or error
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);



echo json_encode($results);
$pdo = NULL;

}
catch (PDOException $e) {
    echo "Error: ".$e->getMessage();
}
?>

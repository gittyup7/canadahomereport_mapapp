<?php 

require_once '../dbconfigyyc.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try{	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    /*if($pdo){
		echo "Connected to the <strong>$db</strong> database successfully!";
	}*/
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	#2 Variables: userID, Not Removed
	$sql = 'SELECT com_community_boundaries_polygon.name FROM layers.com_community_boundaries_polygon
WHERE ST_Intersects(com_community_boundaries_polygon.geom, ST_SetSRID(ST_Point(:longitude, :latitude), 4326))';

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
$stmt->bindParam(':longitude', $longitude);
$stmt->bindParam(':latitude', $latitude);

# Try query or error
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($results);
$pdo = NULL;

}
catch (Exception $e) {
    echo "PHP Error: ".$e->getMessage();
}
?>
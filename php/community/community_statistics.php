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
	$sql = 'SELECT house_price, price_rank, crime, crime_rank, household_income, individual_income, over_65_pop, under_19_pop, immigration FROM layers.com_master_table
WHERE com_name=:community';

	$sql = $sql . ";";


$community = false;
if(isset($_POST['communityAJAX'])){
$community = $_POST['communityAJAX'];}
	
# Build SQL SELECT statement and return the geometry as a GeoJSON element
	$stmt = $pdo->prepare($sql);
	
	if (!$stmt) {
		echo "Prepare error";
}

// bind parameters with placeholders
$stmt->bindParam(':community', strval($community));

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

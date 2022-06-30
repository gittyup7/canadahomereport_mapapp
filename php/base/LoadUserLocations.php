<?php 



require_once dirname(__DIR__,1).'/dbconfigyyc.php';


try{	
	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    /*if($pdo){
		echo "Connected to the <strong>$db</strong> database successfully!";
	}*/
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	#2 Variables: userID, Not Removed
	$sql = 'SELECT * FROM userdata."userLocations" WHERE "user_ID"=:user_ID AND removed=FALSE';



		$sql = $sql . ";";


	$user_ID = (float)$_POST['user_ID'];

# Build SQL SELECT statement and return the geometry as a GeoJSON element
	$stmt = $pdo->prepare($sql);
	
	if (!$stmt) {
		echo "Prepare error";
}

//bind parameters with placeholders
$user_ID = intval($user_ID);
$stmt->bindParam(':user_ID', $user_ID);

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
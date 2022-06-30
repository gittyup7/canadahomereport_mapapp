<?php	
	if(isset($_POST['address'])){
		//if (is_numeric($_POST['user_ID'])==true){
		$user_ID = (float) $_POST['user_ID'];
		if (is_string($_POST['address'])==true && strlen($_POST['address'])<29){
		$address = $_POST['address'];}		
		if (is_string($_POST['community'])==true && strlen($_POST['community'])<29){
		$community = $_POST['community'];}
		if (is_numeric($_POST['longitude'])==true){
		$longitude = $_POST['longitude'];}
		if (is_numeric($_POST['latitude'])==true){
		$latitude = $_POST['latitude'];}
	} 
	
	//RUN INSERTLOCATION HERE
	insertLocation($user_ID, $address, $community, $latitude, $longitude);
	
function insertLocation($user_ID, $address, $community, $latitude, $longitude) {
    require_once dirname(__DIR__,1).'/dbconfigyyc.php';

try{	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    /*if($pdo){
		echo "Connected to the <strong>$db</strong> database successfully!";
	}*/
	
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	//Get variables from form ($user_ID, $location_ID, $active, $address, $community, $latitude, $longitude)
		
	/*if(isset($_POST['address'])){
		$user_ID = 123; *//*$_POST['user_ID'];*/
		/*$address = $_POST['address'];
		$community = $_POST['community'];
		$longitude = $_POST['longitude'];
		$latitude = $_POST['latitude'];
	} */
		
		// prepare statement for insert
        $sql = 'INSERT INTO userdata."userLocations" ("user_ID", address, community, latitude, longitude, "dateAdded", "dateRemoved", removed) VALUES (:user_ID, :address, :community, :latitude, :longitude, current_timestamp, null, false)';
        $sql = $sql . ";";
		$stmt = $pdo->prepare($sql);
        
        // pass values to the statement
        $stmt->bindValue(':user_ID', $user_ID);
        //$stmt->bindValue(':company', $location_ID);
		$stmt->bindValue(':address', $address);
        $stmt->bindValue(':community', $community);
		$stmt->bindValue(':latitude', floatval($latitude));
        $stmt->bindValue(':longitude', floatval($longitude));
        
        // execute the insert statement
        $stmt->execute();
		
		//$stmt->debugDumpParams();
		
		$pdo = NULL;

		if (!$stmt) {
		echo "Prepare error";
}

        
        // return generated id
        return "Row Added.";
    }
	catch (PDOException $e) {
    echo "Error: ".$e->getMessage();
}} ?>
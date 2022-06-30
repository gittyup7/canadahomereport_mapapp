<?php	
	if(isset($_POST['address'])){
		//if (is_numeric($_POST['user_ID'])==true){
		$user_ID = (float) $_POST['user_ID'];
		if (is_string($_POST['address'])==true && strlen($_POST['address'])<29){
		$address = $_POST['address'];}		
		
	} 
	
	//RUN INSERTLOCATION HERE
	removeLocation($user_ID, $address);
	
function removeLocation($user_ID, $address) {
    require_once dirname(__DIR__,1).'/dbconfigyyc.php';

try{	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    /*if($pdo){
		echo "Connected to the <strong>$db</strong> database successfully!";
	}*/
	
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	
		
		// prepare statement for insert
        $sql = 'UPDATE userdata."userLocations" SET removed = TRUE, "dateRemoved" = current_timestamp WHERE address = :address AND "user_ID" = :user_ID';
        $sql = $sql . ";";
		$stmt = $pdo->prepare($sql);
        
        // pass values to the statement
        $stmt->bindValue(':user_ID', $user_ID);
		$stmt->bindValue(':address', $address);
        
        // execute the insert statement
        $stmt->execute();
		
		//$stmt->debugDumpParams();
		
		$pdo = NULL;

		if (!$stmt) {
		echo "Prepare error";
}

        
        // return generated id
        return "Location Removed.";
    }
	catch (PDOException $e) {
    echo "Error: ".$e->getMessage();
}} ?>
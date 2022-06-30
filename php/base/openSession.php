<?php 
	// Start the session
	session_start();
	
	// Set session variables
	$_SESSION["security_check"] = TRUE;
	$_SESSION["user"] = (float)$_GET['user'];
	$_SESSION["active"] = $_GET['active'];
try{	
   //If user not active, error message 
	if (strcmp($_SESSION["active"], "true") !=0) {
		//Not Active
	}
	else{
		//echo 'User ID: ' . $_SESSION["user"];
		if(isset($_SESSION["user"])) {
			header("Location: ../../index.php");
			exit();
}
	
	}
}
catch(Exception $e) {
  echo 'Message: ' .$e->getMessage();
}
?>
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
	
	#3 Variables: Long, Lat, Layer name
	$sql = "SELECT geom, name, type, ST_AsGeoJSON(geom, 5) As geojson FROM layers.schools_post_sec_point";

/*
* If bbox variable is set, only return records that are within the bounding box
* bbox should be a string in the form of 'southwest_lng,southwest_lat,northeast_lng,northeast_lat'
* Leaflet: map.getBounds().toBBoxString()
*/
if (isset($_GET['bbox'])) {
    $bbox = explode(',', $_GET['bbox']);
    $sql = $sql . " WHERE ST_Transform(geom, 4326) && ST_SetSRID(ST_MakeBox2D(ST_Point('.$bbox[0].', '.$bbox[1].'), ST_Point('.$bbox[2].', '.$bbox[3].')),4326);";
}
else {
		$sql = $sql . ";";
}



# Build SQL SELECT statement and return the geometry as a GeoJSON element
	$stmt = $pdo->prepare($sql);
	
	if (!$stmt) {
		echo "Prepare error";
}


# Try query or error
$stmt->execute();

}
catch (PDOException $e) {
    echo "Error: ".$e->getMessage();
}

#$stmt->debugDumpParams();

# Loop through rows to build feature arrays
$results=$stmt->fetchAll(PDO::FETCH_ASSOC);

$features=[];

#echo count($results);
foreach($results as $row) {
    # Remove geojson and geometry fields from properties    
    unset($row['geom']);
	$geometry = $row['geojson']=json_decode($row['geojson']);
	unset($row['geojson']);
    $feature = [
         'type' => 'Feature',
         'geometry' => $geometry,
         'properties' => $row
    ];
    # Add feature arrays to feature collection array
    array_push($features, $feature);
}
$featureCollection=["type"=>"FeatureCollection", "features"=>$features];

echo json_encode($featureCollection);
$pdo = NULL;
?>

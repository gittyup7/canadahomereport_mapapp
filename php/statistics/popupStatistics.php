<?php 

error_reporting(E_ALL);
ini_set('display_errors', 'On');

require_once dirname(__DIR__,1).'/dbconfigyyc.php';

try{	
    $pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
    
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
	$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
	
	if(isset($_POST['longitude'])){
		$longitude = $_POST['longitude'];
		$latitude = $_POST['latitude'];
		$layerName = $_POST['activeLay'];
	
		$longitude = floatval($longitude);
		$latitude = floatval($latitude);

		
	}

	# Variables: longitude, latitude, layerName
	#Case statement to return correct SQL to execute
	switch ($layerName) {
    case "cr1":
        $sql = '';
        break;
    case "cr2":
        $sql = '';
        break;
    case "cr3":
        $sql = '';
        break;
		
	case "es1":
        $sql = 'SELECT name, address, ROUND(ST_Distance(geom, location, true))  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.emergency_police_stations_point
ORDER BY  distance LIMIT 3';
        break;
	case "es2":
        $sql = 'SELECT name, address, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.emergency_fire_stations_point
ORDER BY  distance LIMIT 3';
        break;
	case "es3":
        $sql = 'SELECT name, address, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.emergency_health_centers_point
ORDER BY  distance LIMIT 3';
        break;
	case "es4":
        $sql = 'SELECT name, address, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.emergency_hospitals_point
ORDER BY  distance LIMIT 3';
        break;
	case "es5":
        $sql = 'SELECT name, capacity, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.emergency_hospitals_point
ORDER BY  distance LIMIT 3';
        break;
		
	case "o1":
        $sql = 'SELECT feature.name, feature.steward, ST_Distance(feature.geom, location, true)  as distance
FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_cemeteries_polygon As feature
ORDER BY  distance LIMIT 2';
        break;
	case "o2":
        $sql = 'SELECT name, status, type, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_landfills_polygon
ORDER BY  distance LIMIT 1';
        break;
	case "o3":
        $sql = 'SELECT name, type, acres, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_water_treatment_polygon
ORDER BY  distance LIMIT 2';
        break;
	case "o4":
        $sql = 'SELECT feature.planname, feature.stage_dscr, ST_Distance(feature.geom, location, true)  as distance
FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_transportation_corridor As feature
ORDER BY  distance LIMIT 1';
        break;
	case "o5":
        $sql = 'SELECT transptype, trackclass, usetype, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_railroad_line
ORDER BY  distance LIMIT 1';
        break;
	case "o6":
        $sql = 'SELECT full_name, ctp_class, direction_, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.other_railroad_line
ORDER BY  distance LIMIT 3';
        break;
	case "o7":
        $sql = '';
        break;
		
	case "re1":
        $sql = '';
        break;
	case "re2":
        $sql = '';
        break;
		
	case "cl3":
        $sql = '';
        break;
		
	case "s1":
        $sql = 'SELECT name, type, address, grades, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.schools_elementary_point
ORDER BY  distance LIMIT 3';
        break;
	case "s2":
        $sql = 'SELECT name, type, address, grades, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.schools_jr_high_point
ORDER BY  distance LIMIT 3';
        break;
	case "s3":
        $sql = 'SELECT name, type, address, grades, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.schools_high_point
ORDER BY  distance LIMIT 3';
        break;
	case "s4":
        $sql = 'SELECT name, type, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.schools_post_sec_point
ORDER BY  distance';
        break;
	case "s5":
        $sql = 'SELECT stop_name, teleride, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.transit_bus_stops_csv_pts
ORDER BY  distance LIMIT 3';
        break;
	case "s6":
        $sql = '';
        break;
	case "s7":
        $sql = 'SELECT stationnam, direction, route_num, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.transit_lrt_stops_csv_pts
ORDER BY  distance LIMIT 1';
        break;
	case "s8":
        $sql = '';
        break;
		
	case "c1":
        $sql = '';
        break;
	case "c2":
        $sql = 'SELECT name, address, type, community, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.com_services_com_centers_point
ORDER BY  distance LIMIT 1';
        break;
	case "c3":
        $sql = 'SELECT name, address, type, community, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.com_services_libraries_point
ORDER BY  distance LIMIT 3';
        break;
		
	case "r1":
        $sql = 'SELECT * FROM(SELECT feature.asset_type, feature.life_cycle, feature.steward, ST_Distance(feature.geom, location, true)  as distance
FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_sports_surfaces_point As feature
) AS s2
WHERE  s2.distance < 1600
ORDER BY s2.distance';
        break;
	case "r2":
        $sql = "SELECT * FROM(SELECT name, type, address, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_rec_facilities_point
	WHERE type='Spray Park' OR type='Sailing School' OR type='Outdoor Wading Pool' OR type='Outdoor Pool' OR type='Multi-Sport Facility' OR type='Leisure Centre - Municipal' OR type='Canoe & Rowing Club' OR 
	type='Aquatic & Recreation Centre' OR type='Aquatic & Fitness Centre' OR type='Aquatic - Flat Water') AS s2
	WHERE  s2.distance < 1600
	ORDER BY s2.distance";
        break;
	case "r3":
        $sql = 'SELECT name, address, fencing, status, maintained, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_parks_off_leash_polygon
ORDER BY  distance LIMIT 1';
        break;
	case "r4":
        $sql = 'SELECT type, steward, acres, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_parks_polygon
ORDER BY  distance LIMIT 3';
        break;
	case "r5":
        $sql = 'SELECT oc_name, acres, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_prov_parks_calgary_ab
ORDER BY  distance LIMIT 2';
        break;
	case "r6":
        $sql = '';
        break;
	case "r7":
        $sql = 'SELECT * FROM (SELECT type, minortype, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.rec_playground_equipment_point) AS s2
	WHERE  s2.distance < 1600
	ORDER BY s2.distance';
        break;
		
	case "sh1":
        $sql = 'SELECT tradename, address, licencetyp, comdistnm, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.business_malls_markets_point
ORDER BY  distance LIMIT 3';
        break;
	case "sh4":
        $sql = 'SELECT * FROM(SELECT tradename, address, licencetyp, comdistnm, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.business_restaurants_point) AS s2
	WHERE  s2.distance < 1600
	ORDER BY s2.distance';
        break;
	case "sh5":
        $sql = 'SELECT * FROM(SELECT tradename, address, licencetyp, comdistnm, ST_Distance(geom, location, true)  as distance FROM ST_SetSRID( ST_Point(:longitude, :latitude), 4326) As location, layers.business_gas_stations_point) AS s2
	WHERE  s2.distance < 1600
	ORDER BY s2.distance';
        break;
		
	case "d1":
        $sql = '';
        break;
	case "d2":
        $sql = '';
        break;
	case "d3":
        $sql = '';
        break;
	case "d5":
        $sql = '';
        break;
	case "d6":
        $sql = '';
        break;
}
	
	$sql = $sql . ";";
	
	
	

# If no SQL Query set
/*if (strlen($sql) < 6) {
	echo "Query failed"
	break;
}
else{*/

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
#}
$pdo = NULL;

}
catch (PDOException $e) {
    echo "Error: ".$e->getMessage();
}
?>

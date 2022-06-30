<?php 

		require_once dirname(__DIR__,1).'/dbconfigyyc.php';

		$sql_array = array();
		$sql = "SELECT c.geom, c.class, c.name, ST_AsGeoJSON(c.geom, 5) As geojson FROM layers.com_community_boundaries_polygon AS c INNER JOIN ";
		
	try{
		
		
		$pdo = new PDO ("pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password");
		
		$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false );
		$pdo->setAttribute( PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC );
		
		/*Handles the community filter form*/		
		
		$fireServices= $_POST['fireServices1'];
		if (strlen($fireServices) <5 && strlen($fireServices)>0 && is_numeric($fireServices)){
			
			$sqlTemp = "(SELECT h.name FROM layers.emergency_fire_stations_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $fireServices,  true)) AS s1 ON (c.name = s1.name) INNER JOIN ";

			// works echo $fireServices;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$fireServices=false;
		}
		
		$policeServices= $_POST['policeServices1'];
		if (strlen($policeServices) <5 && strlen($policeServices)>0 && is_numeric($policeServices)){
			
			$sqlTemp = "(SELECT h.name FROM layers.emergency_police_stations_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $policeServices,  true)) AS s2 ON (c.name = s2.name) INNER JOIN ";

			// works echo $policeServices;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$policeServices=false;
		}
		
		$hospitalServices= $_POST['hospitalServices1'];
		if (strlen($hospitalServices) <5 && strlen($hospitalServices)>0 && is_numeric($hospitalServices)){
			
			$sqlTemp = "(SELECT h.name FROM layers.emergency_hospitals_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $hospitalServices,  true)) AS s3 ON (c.name = s3.name) INNER JOIN ";

			// works echo $hospitalServices;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$hospitalServices=false;
		}
		
		
		$crimeRate= $_POST['crimeRate1'];
		
		if (strlen($crimeRate) <5 && strlen($crimeRate)>0 && is_numeric($crimeRate)){
			
			$sqlTemp = "(SELECT s.community FROM analysis.danger_crime_all_cat_rankings s WHERE s.rank_number < $crimeRate) AS s4 ON (s4.community = c.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
		else{
			$crimeRate=false;
		}

		$noiseSource= $_POST['noiseSource1'];
		if (strlen($noiseSource) <5 && strlen($noiseSource)>0 && is_numeric($noiseSource)){
			
			$sqlTemp = "(SELECT b.name FROM layers.com_community_boundaries_polygon As b WHERE b.name NOT IN (SELECT h.name FROM layers.other_major_roads_line As s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $noiseSource,  true) )) As x ON (c.name = x.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
		else{
			$noiseSource=false;
		}
		
		$smellSource= $_POST['smellSource1'];
		if (strlen($smellSource) <5 && strlen($smellSource)>0 && is_numeric($smellSource)){
			
			$sqlTemp = "(SELECT b.name FROM layers.com_community_boundaries_polygon As b WHERE b.name NOT IN (SELECT h.name FROM layers.other_landfills_polygon As s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $smellSource,  true) WHERE s.type = 'Landfill')) As y ON (c.name = y.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
		else{
			$smellSource=false;
		}
		
		$industrialSource= $_POST['industrialSource1'];
		if (strlen($industrialSource) <5 && strlen($industrialSource)>0 && is_numeric($industrialSource)){
			
			$sqlTemp = "(SELECT b.name FROM layers.com_community_boundaries_polygon As b WHERE b.name NOT IN (SELECT h.name FROM layers.com_community_boundaries_polygon As s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 500,  true) WHERE s.class = 'Industrial')) As z ON (c.name = z.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
		else{
			$industrialSource=false;
		}		

		$schoolFilter= $_POST['schoolFilter1'];
		if (strlen($schoolFilter) <7 && strlen($schoolFilter)>3){
			if ($schoolFilter = 'elem'){
			$sqlTemp = "(SELECT h.name FROM layers.schools_elementary_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s5 ON (c.name = s5 .name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
			else if ($schoolFilter = 'jrhigh'){
			$sqlTemp = "(SELECT h.name FROM layers.schools_jr_high_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s5 ON (c.name = s5.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
			else if ($schoolFilter = 'high'){
				echo "high";
			$sqlTemp = "(SELECT h.name FROM layers.schools_high_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s5 ON (c.name = s5.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
		}}
		else{
			$schoolFilter=false;
		}		
		
		$busTransitFilter= $_POST['busTransitFilter1'];
		if (strlen($busTransitFilter) <5 && strlen($busTransitFilter)>0 && is_numeric($busTransitFilter)){
			if ($busTransitFilter = 400){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.transit_bus_stops_400m_buff s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s6 ON (c.name = s6.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
			else if ($busTransitFilter = 1000){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.transit_bus_stops_1000m_buff s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s6 ON (c.name = s6.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}	
		}
		else{
			$busTransitFilter=false;
		}
		
		$lrtTransitFilter= $_POST['lrtTransitFilter1'];
		if (strlen($lrtTransitFilter) <5 && strlen($lrtTransitFilter)>0 && is_numeric($lrtTransitFilter)){
			if ($lrtTransitFilter = 400){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.transit_lrt_stops_400m_buff s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s7 ON (c.name = s7.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
			else if ($lrtTransitFilter = 1000){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.transit_lrt_stops_1000m_buff s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s7 ON (c.name = s7.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
			else if ($lrtTransitFilter = 2000){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.transit_lrt_stops_2000m_buff s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 0,  true)) AS s7 ON (c.name = s7.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			}
		}
		else{
			$lrtTransitFilter=false;
		}
		
		$libraryFilter= $_POST['libraryFilter1'];
		if (strlen($libraryFilter) <5 && strlen($libraryFilter)>0 && is_numeric($libraryFilter)){
			
			$sqlTemp = "(SELECT h.name FROM layers.com_services_libraries_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, $libraryFilter,  true)) AS s8 ON (c.name = s8.name) INNER JOIN ";

			// works echo $libraryFilter;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$libraryFilter=false;
		}
		
/*
		$pParkFilter= $_POST['pParkFilter1'];*/
		
		$majParkFilter= $_POST['majParkFilter1'];
		//echo $majParkFilter;
		if ($majParkFilter === "true"){
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_prov_parks_calgary_ab s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_DWithin(s.geom, h.geom, 100,  true)) AS s9 ON (c.name = s9.name) INNER JOIN ";
			//echo $sqlTemp;
			$sql_array[] = $sqlTemp;
			//echo $majParkFilter;
			}
		else{
			$majParkFilter="false";
		}
		
		
		$dogParkFilter= $_POST['dogParkFilter1'];
		//echo $dogParkFilter;
		if ($dogParkFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM analysis.rec_open_dog_parks_dissolved_polygon s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom)) AS s10 ON (c.name = s10.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$dogParkFilter="false";
		}
		
		$playgroundFilter= $_POST['playgroundFilter1'];
		//echo $playgroundFilter;
		if ($playgroundFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_playground_equipment_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom)) AS s11 ON (c.name = s11.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$playgroundFilter="false";
		}
		
		$pathFilter= $_POST['pathFilter1'];
		//echo $pathFilter;
		if ($pathFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_bikepaths_paved_line s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.status='EXISTING') AS s12 ON (c.name = s12.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$pathFilter="false";
		}
		
		$baseballFilter= $_POST['baseballFilter1'];
		//echo $baseballFilter;
		if ($baseballFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='BALL DIAMOND') AS s13 ON (c.name = s13.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$baseballFilter="false";
		}
		
		$basketballFilter= $_POST['basketballFilter1'];
		//echo $basketballFilter;
		if ($basketballFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='BASKETBALL') AS s14 ON (c.name = s14.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$basketballFilter="false";
		}
		
		$cricketFilter= $_POST['cricketFilter1'];
		//echo $cricketFilter;
		if ($cricketFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='CRICKET') AS s20 ON (c.name = s20.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$cricketFilter="false";
		}
		
		$footballFilter= $_POST['footballFilter1'];
		//echo $footballFilter;
		if ($footballFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='FOOTBALL' OR s.asset_type='SOCCER OR FOOTBALL') AS s15 ON (c.name = s15.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$footballFilter="false";
		}
		
		$frisbeeFilter= $_POST['frisbeeFilter1'];
		//echo $frisbeeFilter;
		if ($frisbeeFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='FRISBEE GOLF') AS s16 ON (c.name = s16.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$frisbeeFilter="false";
		}
		
		$hockeyFilter= $_POST['hockeyFilter1'];
		//echo $hockeyFilter;
		if ($hockeyFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='ICE ARENA' OR s.asset_type='SKATING RINK') AS s17 ON (c.name = s17.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$hockeyFilter="false";
		}
		
		$skateboardFilter= $_POST['skateboardFilter1'];
		//echo $skateboardFilter;
		if ($skateboardFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='SKATE PARK') AS s18 ON (c.name = s18.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$skateboardFilter="false";
		}
		
		$sledFilter= $_POST['sledFilter1'];
		//echo $sledFilter;
		if ($sledFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='TOBOGGAN HILL') AS s19 ON (c.name = s19.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$sledFilter="false";
		}
		
		$soccerFilter= $_POST['soccerFilter1'];
		//echo $soccerFilter;
		if ($soccerFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='SOCCER' OR s.asset_type='SOCCER OR FOOTBALL') AS s21 ON (c.name = s21.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$soccerFilter="false";
		}
		
		$tennisFilter= $_POST['tennisFilter1'];
		//echo $tennisFilter;
		if ($tennisFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='TENNIS') AS s22 ON (c.name = s22.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$tennisFilter="false";
		}
		
		$trackFilter= $_POST['trackFilter1'];
		//echo $trackFilter;
		if ($trackFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='TRACK AND FIELD') AS s23 ON (c.name = s23.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$trackFilter="false";
		}
		
		$volleyballFilter= $_POST['volleyballFilter1'];
		//echo $volleyballFilter;
		if ($volleyballFilter === "true"){
			
			$sqlTemp = "(SELECT DISTINCT h.name FROM layers.rec_sports_surfaces_point s LEFT JOIN layers.com_community_boundaries_polygon h ON ST_Intersects(s.geom, h.geom) WHERE s.asset_type='VOLLEYBALL') AS s24 ON (c.name = s24.name) INNER JOIN ";
			$sql_array[] = $sqlTemp;
		}
		else{
			$volleyballFilter="false";
		}

		$youngFilter= $_POST['youngFilter1'];
		if (strlen($youngFilter) <4 && strlen($youngFilter)>0){
			
			$sqlTemp = "(SELECT s.name FROM layers.com_age_19_stats_polygon s WHERE s.total_style >" . intval($youngFilter) . ") AS s25 ON (c.name = s25.name) INNER JOIN ";

			// works echo $libraryFilter;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$youngFilter=false;
		}
		
		$seniorFilter= $_POST['seniorFilter1'];
		if (strlen($seniorFilter) <4 && strlen($seniorFilter)>0){
			
			$sqlTemp = "(SELECT s.name FROM layers.com_age_65_stats_polygon s WHERE s.total_style >" . intval($seniorFilter) . ") AS s26 ON (c.name = s26.name) INNER JOIN ";

			// works echo $libraryFilter;
			$sql_array[] = $sqlTemp;
			//echo $sql_array[0];
			//echo "length ".count($sql_array);
		}
		else{
			$seniorFilter=false;
		}
		/*$ethnicFilter= $_POST['ethnicFilter1'];*/
			
		/*Format the SQL array to create inner join.  Cancel filter
		if sql_array is empty.*/
		
		if(count($sql_array)>0){
			//$count1 = count($sql_array);
			
					
			foreach($sql_array as $value){
				
					$sql .= $value;				
			}				
		}/*
		else{
			exit{"No filter options selected."}
		}*/	

		//Remove INNER JOIN from end
		$sql = substr($sql, 0, -12);
			
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

	//echo $sql;

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
		$geometry = json_decode($row['geojson'], true);
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
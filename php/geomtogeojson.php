<? php 
//Takes Geom and converts to Geojson, echoing result
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

?>
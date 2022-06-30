

//Function for loading nearest statistics
function nearestStats1(lat, lng){
	
	
	//If not active, hide the nearest statistics table, show message that no location is set
	
	//If active, call for nearest layers data and load it into the table
	
	
//Fire Stations
var fsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_fire_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
fsData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
fsTable= new Tabulator("#nearestFS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:fsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}}
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Police Stations
/*
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_police_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPSS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Hospitals
var hospitalData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_hospital.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hospitalData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hospitalTable= new Tabulator("#nearestHO1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hospitalData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Health Centers
var hcData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_health_centers.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hcData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hcTable= new Tabulator("#nearestHC1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hcData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Elementary
var elemData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_elementary.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
elemData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
elemTable= new Tabulator("#nearestES1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:elemData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Jr High
var jhData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_jr_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
jhData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
jhTable= new Tabulator("#nearestJHS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:jhData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//High
var highData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
highData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
highTable= new Tabulator("#nearestHS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:highData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Post Sec
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_post_sec.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Type", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Parks
var rpData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_rec_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
rpData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
rpTable= new Tabulator("#nearestRP1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:rpData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Prov_Parks
var ppData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_prov_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
ppData= [
{busNameCol:fromPHP[0].oc_name, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
ppTable= new Tabulator("#nearestPP1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:ppData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Bus_Stops
var bsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_bus_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
bsData= [
{busNameCol:fromPHP[0].stop_name,
communityCol:fromPHP[0].teleride, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
bsTable= new Tabulator("#nearestTBS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:bsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Stop Name", field:"busNameCol", sorter:"string"},
{title:"Teleride", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Lrt_Stops
var lsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_lrt_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
lsData= [
{busNameCol:fromPHP[0].stationnam,
communityCol:fromPHP[0].route_num, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
lsTable= new Tabulator("#nearestTLS1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:lsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Station Name", field:"busNameCol", sorter:"string"},
{title:"Route Number", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Cemeteries
var cemeteriesData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_cemeteries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
cemeteriesData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].steward,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
cemeteriesTable= new Tabulator("#nearestCemetery1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:cemeteriesData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Steward", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Landfills
var landfillData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_landfill.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
landfillData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
landfillTable= new Tabulator("#nearestLandfill1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:landfillData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Community Boundaries
var commData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_communities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
commData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].class, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].class, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].class, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].name, communityCol:fromPHP[3].class, distanceCol:fromPHP[3].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
commTable= new Tabulator("#nearestComms1", {
height:"123px",
responsiveLayout:true, // enable responsive layouts
data:commData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Class", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Gas Stations
var gsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_gas_stations.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
gsData= [
{busNameCol:fromPHP[0].tradename,
communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
gsTable= new Tabulator("#nearestGas1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:gsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Malls/Markets
var mallsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_malls_markets.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
mallsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
mallsTable= new Tabulator("#nearestMall1", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:mallsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Restaurants
var restaurantsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_restaurants.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
restaurantsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
restaurantsTable= new Tabulator("#nearestRestaurants1", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:restaurantsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Attractions
var entertainmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_entertainment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
entertainmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
entertainmentTable= new Tabulator("#nearestAttractions1", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:entertainmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Library
var libraryData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_libraries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
libraryData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
libraryTable= new Tabulator("#nearestLibrary1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:libraryData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
	

//Water Treatment
var waterTreatmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_water_treatment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
waterTreatmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
waterTreatmentTable= new Tabulator("#nearestWaterTreatment1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:waterTreatmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Playgrounds
var plyData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_playground_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
plyData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].minortype, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].type, communityCol:fromPHP[1].minortype, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].type, communityCol:fromPHP[2].minortype, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPlaygrounds1", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:plyData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Other", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Sports
var sportData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_sports_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
sportData= [
{busNameCol:fromPHP[0].asset_type, communityCol:fromPHP[0].life_cycle, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].asset_type, communityCol:fromPHP[1].life_cycle, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].asset_type, communityCol:fromPHP[2].life_cycle, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].asset_type, communityCol:fromPHP[3].life_cycle, distanceCol:fromPHP[3].distance},
{busNameCol:fromPHP[4].asset_type, communityCol:fromPHP[4].life_cycle, distanceCol:fromPHP[4].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestSports1", {
height:"147px",
responsiveLayout:true, // enable responsive layouts
data:sportData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Railroads
var railData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_railroad.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
railData= [
{busNameCol:fromPHP[0].usetype, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestRailroad1", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:railData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type of Rail", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});*/
	
}

/*
function nearestStats2(lat, lng){
	
	
	//If not active, hide the nearest statistics table, show message that no location is set
	
	//If active, call for nearest layers data and load it into the table
	
	
//Fire Stations
var fsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_fire_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
fsData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
fsTable= new Tabulator("#nearestFS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:fsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}}
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Police Stations
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_police_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPSS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Hospitals
var hospitalData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_hospital.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hospitalData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hospitalTable= new Tabulator("#nearestHO2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hospitalData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Health Centers
var hcData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_health_centers.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hcData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hcTable= new Tabulator("#nearestHC2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hcData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Elementary
var elemData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_elementary.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
elemData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
elemTable= new Tabulator("#nearestES2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:elemData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Jr High
var jhData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_jr_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
jhData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
jhTable= new Tabulator("#nearestJHS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:jhData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//High
var highData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
highData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
highTable= new Tabulator("#nearestHS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:highData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Post Sec
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_post_sec.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Type", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Parks
var rpData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_rec_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
rpData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
rpTable= new Tabulator("#nearestRP2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:rpData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Prov_Parks
var ppData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_prov_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
ppData= [
{busNameCol:fromPHP[0].oc_name, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
ppTable= new Tabulator("#nearestPP2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:ppData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Bus_Stops
var bsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_bus_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
bsData= [
{busNameCol:fromPHP[0].stop_name,
communityCol:fromPHP[0].teleride, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
bsTable= new Tabulator("#nearestTBS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:bsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Stop Name", field:"busNameCol", sorter:"string"},
{title:"Teleride", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Lrt_Stops
var lsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_lrt_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
lsData= [
{busNameCol:fromPHP[0].stationnam,
communityCol:fromPHP[0].route_num, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
lsTable= new Tabulator("#nearestTLS2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:lsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Station Name", field:"busNameCol", sorter:"string"},
{title:"Route Number", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Cemeteries
var cemeteriesData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_cemeteries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
cemeteriesData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].steward,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
cemeteriesTable= new Tabulator("#nearestCemetery2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:cemeteriesData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Steward", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Landfills
var landfillData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_landfill.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
landfillData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
landfillTable= new Tabulator("#nearestLandfill2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:landfillData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Community Boundaries
var commData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_communities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
commData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].class, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].class, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].class, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].name, communityCol:fromPHP[3].class, distanceCol:fromPHP[3].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
commTable= new Tabulator("#nearestComms2", {
height:"123px",
responsiveLayout:true, // enable responsive layouts
data:commData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Class", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Gas Stations
var gsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_gas_stations.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
gsData= [
{busNameCol:fromPHP[0].tradename,
communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
gsTable= new Tabulator("#nearestGas2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:gsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Malls/Markets
var mallsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_malls_markets.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
mallsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
mallsTable= new Tabulator("#nearestMall2", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:mallsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Restaurants
var restaurantsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_restaurants.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
restaurantsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
restaurantsTable= new Tabulator("#nearestRestaurants2", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:restaurantsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Attractions
var entertainmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_entertainment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
entertainmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
entertainmentTable= new Tabulator("#nearestAttractions2", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:entertainmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Library
var libraryData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_libraries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
libraryData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
libraryTable= new Tabulator("#nearestLibrary2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:libraryData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
	

//Water Treatment
var waterTreatmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_water_treatment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
waterTreatmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
waterTreatmentTable= new Tabulator("#nearestWaterTreatment2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:waterTreatmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Playgrounds
var plyData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_playground_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
plyData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].minortype, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].type, communityCol:fromPHP[1].minortype, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].type, communityCol:fromPHP[2].minortype, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPlaygrounds2", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:plyData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Other", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Sports
var sportData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_sports_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
sportData= [
{busNameCol:fromPHP[0].asset_type, communityCol:fromPHP[0].life_cycle, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].asset_type, communityCol:fromPHP[1].life_cycle, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].asset_type, communityCol:fromPHP[2].life_cycle, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].asset_type, communityCol:fromPHP[3].life_cycle, distanceCol:fromPHP[3].distance},
{busNameCol:fromPHP[4].asset_type, communityCol:fromPHP[4].life_cycle, distanceCol:fromPHP[4].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestSports2", {
height:"147px",
responsiveLayout:true, // enable responsive layouts
data:sportData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Railroads
var railData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_railroad.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
railData= [
{busNameCol:fromPHP[0].usetype, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestRailroad2", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:railData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type of Rail", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
	
}


function nearestStats3(lat, lng){
	
	
	//If not active, hide the nearest statistics table, show message that no location is set
	
	//If active, call for nearest layers data and load it into the table
	
	
//Fire Stations
var fsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_fire_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
fsData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
fsTable= new Tabulator("#nearestFS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:fsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}}
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Police Stations
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_police_station.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPSS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Hospitals
var hospitalData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_hospital.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hospitalData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hospitalTable= new Tabulator("#nearestHO3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hospitalData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Health Centers
var hcData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_health_centers.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
hcData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
hcTable= new Tabulator("#nearestHC3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:hcData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Elementary
var elemData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_elementary.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
elemData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
elemTable= new Tabulator("#nearestES3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:elemData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Jr High
var jhData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_jr_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
jhData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
jhTable= new Tabulator("#nearestJHS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:jhData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//High
var highData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_high_school.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
highData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
highTable= new Tabulator("#nearestHS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:highData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Post Sec
var psData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_post_sec.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
psData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:psData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Type", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Parks
var rpData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_rec_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
rpData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
rpTable= new Tabulator("#nearestRP3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:rpData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Prov_Parks
var ppData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_prov_park.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
ppData= [
{busNameCol:fromPHP[0].oc_name, communityCol:fromPHP[0].acres,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
ppTable= new Tabulator("#nearestPP3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:ppData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Acres", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Bus_Stops
var bsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_bus_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
bsData= [
{busNameCol:fromPHP[0].stop_name,
communityCol:fromPHP[0].teleride, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
bsTable= new Tabulator("#nearestTBS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:bsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Stop Name", field:"busNameCol", sorter:"string"},
{title:"Teleride", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Lrt_Stops
var lsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_lrt_stop.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
lsData= [
{busNameCol:fromPHP[0].stationnam,
communityCol:fromPHP[0].route_num, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
lsTable= new Tabulator("#nearestTLS3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:lsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Station Name", field:"busNameCol", sorter:"string"},
{title:"Route Number", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Cemeteries
var cemeteriesData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_cemeteries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
cemeteriesData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].steward,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
cemeteriesTable= new Tabulator("#nearestCemetery3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:cemeteriesData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Steward", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Landfills
var landfillData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_landfill.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
landfillData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
landfillTable= new Tabulator("#nearestLandfill3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:landfillData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Community Boundaries
var commData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_communities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
commData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].class, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].class, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].class, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].name, communityCol:fromPHP[3].class, distanceCol:fromPHP[3].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
commTable= new Tabulator("#nearestComms3", {
height:"123px",
responsiveLayout:true, // enable responsive layouts
data:commData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Class", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Gas Stations
var gsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_gas_stations.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
gsData= [
{busNameCol:fromPHP[0].tradename,
communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
gsTable= new Tabulator("#nearestGas3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:gsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Malls/Markets
var mallsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_malls_markets.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
mallsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
mallsTable= new Tabulator("#nearestMall3", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:mallsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Restaurants
var restaurantsData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_restaurants.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
restaurantsData= [
{busNameCol:fromPHP[0].tradename, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].tradename, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].tradename, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
restaurantsTable= new Tabulator("#nearestRestaurants3", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:restaurantsData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Attractions
var entertainmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_entertainment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
entertainmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].name, communityCol:fromPHP[1].address, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].name, communityCol:fromPHP[2].address, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
entertainmentTable= new Tabulator("#nearestAttractions3", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:entertainmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
//Library
var libraryData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_libraries.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
libraryData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].address,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
libraryTable= new Tabulator("#nearestLibrary3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:libraryData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
	

//Water Treatment
var waterTreatmentData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_water_treatment.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
waterTreatmentData= [
{busNameCol:fromPHP[0].name, communityCol:fromPHP[0].type,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
waterTreatmentTable= new Tabulator("#nearestWaterTreatment3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:waterTreatmentData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Name", field:"busNameCol", sorter:"string"},
{title:"Address", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Playgrounds
var plyData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_playground_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
plyData= [
{busNameCol:fromPHP[0].type, communityCol:fromPHP[0].minortype, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].type, communityCol:fromPHP[1].minortype, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].type, communityCol:fromPHP[2].minortype, distanceCol:fromPHP[2].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestPlaygrounds3", {
height:"100px",
responsiveLayout:true, // enable responsive layouts
data:plyData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Other", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Sports
var sportData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_sports_facilities.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
sportData= [
{busNameCol:fromPHP[0].asset_type, communityCol:fromPHP[0].life_cycle, distanceCol:fromPHP[0].distance},
{busNameCol:fromPHP[1].asset_type, communityCol:fromPHP[1].life_cycle, distanceCol:fromPHP[1].distance},
{busNameCol:fromPHP[2].asset_type, communityCol:fromPHP[2].life_cycle, distanceCol:fromPHP[2].distance},
{busNameCol:fromPHP[3].asset_type, communityCol:fromPHP[3].life_cycle, distanceCol:fromPHP[3].distance},
{busNameCol:fromPHP[4].asset_type, communityCol:fromPHP[4].life_cycle, distanceCol:fromPHP[4].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestSports3", {
height:"147px",
responsiveLayout:true, // enable responsive layouts
data:sportData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});

//Railroads
var railData;
$.ajax({
type: "POST",
url: "./php/nearest/nearest_railroad.php",
data: {longitude: lng, latitude: lat},
success: function(response) {
//console.log(response);
if(map.hasLayer(queryLayer)){
map.removeLayer(queryLayer);
}
var fromPHP = JSON.parse(response);
//Load nearestFeaturesData array
railData= [
{busNameCol:fromPHP[0].usetype, communityCol:fromPHP[0].status,
distanceCol:fromPHP[0].distance}];
//Load nearestFeaturesTable with nearestFeaturesData
psTable= new Tabulator("#nearestRailroad3", {
height:"50px",
responsiveLayout:true, // enable responsive layouts
data:railData, //assign data to table
layout:"fitColumns", //fit columns to width of table (optional)
columns:[ //Define Table Columns
{title:"Type of Rail", field:"busNameCol", sorter:"string"},
{title:"Status", field:"communityCol", sorter:"string"},
{title:"Distance (m)", field:"distanceCol", sorter:"number", formatterParams:{precision:1}},
]
});
},
error: function(xhr, status, error){
alert("ERROR:" +error);
}
});
	
}*/
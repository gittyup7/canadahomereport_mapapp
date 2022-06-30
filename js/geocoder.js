function geocodeLocation(){
var searchText = document.getElementById("search").value.trim();

//Verify searchText is searchable text
if (validCharForAddress(searchText) && searchText!=''){
//Check if text matches a community name

//alert(searchText.toUpperCase());
var bool_comm = communityMatch(searchText);

//If a community name
if(bool_comm===true){
	var mapData = L.featureGroup();
	
	communitiesLayer.eachLayer(function(layer){
		//alert(layer.getTooltip().getContent());
		var temp = layer.getTooltip().getContent();
		//alert(temp);
		if (temp.indexOf(searchText.toUpperCase())>-1){
			layer.addTo(mapData);
			map.fitBounds(mapData.getBounds());
			//Make sure Communities layer is turned on
			communitiesLayer.addTo(map);
			
	}});
}
	
else{

/*viewbox=-109.759,60.1674,-119.6783,48.9403*/
var locIQsettings = {
  "async": true,
  "crossDomain": true,
  "url": "https://maps.googleapis.com/maps/api/geocode/json?address="+searchText+"&bounds=48.9403,-119.6783|60.1674,-109.759&key=AIzaSyBuBOc90rtlFABHqP7mh07QOxfiwBiFC98",
  "method": "GET"
}

$.ajax(locIQsettings).then((response) => geocodeResult(response));
	
}}
else{
	let confirmAction = confirm("No text was entered. Would you like to use the central map cursor for your search?");
        if (confirmAction) {
          reverseGeocode(document.getElementById("latitude").value, document.getElementById("longitude").value);
        } else {
          alert("No search performed.  Please enter a valid address or community name.");
        }
}}

function geocodeResult(response){
	var latitude;
	var longitude;
	var locSplitter;
  //console.log(response);
  //console.log(response.results[0]);
  //console.log(response.results[0].geometry.location.lat);  
  console.log(response.results[0].formatted_address);
  
  //Create Location
  locSplitter = locationSplitter(response.results[0].formatted_address);

  latitude = response.results[0].geometry.location.lat;
  longitude = response.results[0].geometry.location.lng;

  getCommunity(locSplitter, latitude, longitude);
}

//Break up the location string
function locationSplitter(locString){
	var temp = locString.split(',');
	alert(temp[0]);
	return temp;
}

//REVERSE GEOCODING
function reverseGeocode(latitude, longitude){
	var latitudeRG = latitude;
	var longitudeRG = longitude;
	
	//Verify latitude/longitude are float numbers
	if (latitudeRG > 50.81 && latitudeRG < 51.22 && longitudeRG && -114.3 && longitudeRG < -113.86){
	//alert("Valid Lat/Lng");

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitudeRG+","+longitudeRG+"&bounds=48.9403,-119.6783|60.1674,-109.759&key=AIzaSyC16qD0JOPZkdM3XWr7RP1bFYDE50tt5KM",
	  "method": "GET"
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	  console.log(response.results[2]);
	  
	  return response.results[2];
	});
}
else{
	alert("Sorry, that location is outside of Calgary. Please place the cursor inside of a Calgary community to search.")
}}

//determine if value matches a community
function communityMatch(tmpValue){

	tmpValue=tmpValue.toUpperCase();
	
	var commNames = ["01B","01C","01F","01G","01H","01I","01K","02B","02C","02E","02F",
"02K","02L","03D","03W","05D","05E","05F","05G","06A","06B","06C","09D","09H","09K","09O",
"09P","09Q","10D","10E","12A","12B","12C","12F","12H","12I","12J","12K","13A","13B","13C","13D","13E",
"13F","13G","13H","13I","13J","13K","ABBEYDALE","ACADIA","ALBERT PARK/RADISSON HEIGHTS",
"ALTADORE","ALYTH/BONNYBROOK","APPLEWOOD PARK","ARBOUR LAKE","ASPEN WOODS","AUBURN BAY",
"AURORA BUSINESS PARK","BANFF TRAIL","BANKVIEW","BAYVIEW","BEDDINGTON HEIGHTS","BEL-AIRE",
"BELMONT","BELTLINE","BELVEDERE","BONAVISTA DOWNS","BOWNESS","BRAESIDE","BRENTWOOD","BRIDGELAND/RIVERSIDE",
"BRIDLEWOOD","BRITANNIA","BURNS INDUSTRIAL","CALGARY INTERNATIONAL AIRPORT","CAMBRIAN HEIGHTS",
"CANADA OLYMPIC PARK","CANYON MEADOWS","CAPITOL HILL","CARRINGTON","CASTLERIDGE","CEDARBRAE",
"CHAPARRAL","CHARLESWOOD","CHINATOWN","CHINOOK PARK","CHRISTIE PARK","CITADEL","CITYSCAPE",
"CLIFF BUNGALOW","COACH HILL","COLLINGWOOD","COPPERFIELD","CORAL SPRINGS","CORNERSTONE",
"COUGAR RIDGE","COUNTRY HILLS","COUNTRY HILLS VILLAGE","COVENTRY HILLS","CRANSTON",
"CRESCENT HEIGHTS","CRESTMONT","CURRIE BARRACKS","DALHOUSIE","DEER RIDGE","DEER RUN",
"DEERFOOT BUSINESS CENTRE","DIAMOND COVE","DISCOVERY RIDGE","DOUGLASDALE/GLEN",
"DOVER","DOWNTOWN COMMERCIAL CORE","DOWNTOWN EAST VILLAGE","DOWNTOWN WEST END","EAGLE RIDGE",
"EAST FAIRVIEW INDUSTRIAL","EAST SHEPARD INDUSTRIAL","EASTFIELD","EAU CLAIRE","EDGEMONT",
"ELBOW PARK","ELBOYA","ERIN WOODS","ERLTON","EVANSTON","EVERGREEN","FAIRVIEW","FAIRVIEW INDUSTRIAL",
"FALCONRIDGE","FISH CREEK PARK","FOOTHILLS","FOREST HEIGHTS","FOREST LAWN",
"FOREST LAWN INDUSTRIAL","FRANKLIN","GARRISON GREEN","GARRISON WOODS","GLAMORGAN","GLENBROOK",
"GLENDALE","GLENDEER BUSINESS PARK","GLENMORE PARK","GOLDEN TRIANGLE","GREAT PLAINS",
"GREENVIEW","GREENVIEW INDUSTRIAL PARK","GREENWOOD/GREENBRIAR","HAMPTONS","HARVEST HILLS",
"HAWKWOOD","HAYSBORO","HIDDEN VALLEY","HIGHFIELD","HIGHLAND PARK","HIGHWOOD","HILLHURST",
"HORIZON","HOUNSFIELD HEIGHTS/BRIAR HILL","HUNTINGTON HILLS","INGLEWOOD","KELVIN GROVE",
"KEYSTONE HILLS","KILLARNEY/GLENGARRY","KINCORA","KINGSLAND","LAKE BONAVISTA","LAKEVIEW",
"LEGACY","LINCOLN PARK","LIVINGSTON","LOWER MOUNT ROYAL","MACEWAN GLEN","MAHOGANY",
"MANCHESTER","MANCHESTER INDUSTRIAL","MAPLE RIDGE","MARLBOROUGH","MARLBOROUGH PARK",
"MARTINDALE","MAYFAIR","MAYLAND","MAYLAND HEIGHTS","MCCALL","MCKENZIE LAKE","MCKENZIE TOWNE",
"MEADOWLARK PARK","MEDICINE HILL","MERIDIAN","MIDNAPORE","MILLRISE","MISSION","MONTEREY PARK",
"MONTGOMERY","MOUNT PLEASANT","NEW BRIGHTON","NOLAN HILL","NORTH AIRWAYS","NORTH GLENMORE PARK",
"NORTH HAVEN","NORTH HAVEN UPPER","NOSE HILL PARK","OAKRIDGE","OGDEN","OGDEN SHOPS","PALLISER",
"PANORAMA HILLS","PARKDALE","PARKHILL","PARKLAND","PATTERSON","PEGASUS","PENBROOKE MEADOWS",
"PINE CREEK","PINERIDGE","POINT MCKAY","PUMP HILL","QUEENS PARK VILLAGE","QUEENSLAND",
"RAMSAY","RANCHLANDS","RED CARPET","REDSTONE","RENFREW","RICHMOND","RIDEAU PARK","RIVERBEND",
"ROCKY RIDGE","ROSEDALE","ROSEMONT","ROSSCARROCK","ROXBORO","ROYAL OAK","ROYAL VISTA",
"RUNDLE","RUTLAND PARK","SADDLE RIDGE","SADDLE RIDGE INDUSTRIAL","SAGE HILL","SANDSTONE VALLEY",
"SCARBORO","SCARBORO/ SUNALTA WEST","SCENIC ACRES","SECTION 23","SETON","SHAGANAPPI",
"SHAWNEE SLOPES","SHAWNESSY","SHEPARD INDUSTRIAL","SHERWOOD","SIGNAL HILL","SILVER SPRINGS",
"SILVERADO","SKYLINE EAST","SKYLINE WEST","SKYVIEW RANCH","SOMERSET","SOUTH AIRWAYS",
"SOUTH CALGARY","SOUTH FOOTHILLS","SOUTHVIEW","SOUTHWOOD","SPRINGBANK HILL","SPRUCE CLIFF",
"ST. ANDREWS HEIGHTS","STARFIELD","STONEGATE LANDING","STONEY 1","STONEY 2","STONEY 3",
"STONEY 4","STRATHCONA PARK","SUNALTA","SUNDANCE","SUNNYSIDE","SUNRIDGE","TARADALE",
"TEMPLE","THORNCLIFFE","TUSCANY","TUXEDO PARK","UNIVERSITY DISTRICT","UNIVERSITY HEIGHTS",
"UNIVERSITY OF CALGARY","UPPER MOUNT ROYAL","VALLEY RIDGE","VALLEYFIELD","VARSITY",
"VISTA HEIGHTS","WALDEN","WEST HILLHURST","WEST SPRINGS","WESTGATE","WESTWINDS","WHITEHORN",
"WILDWOOD","WILLOW PARK","WINDSOR PARK","WINSTON HEIGHTS/MOUNTVIEW","WOLF WILLOW",
"WOODBINE","WOODLANDS","YORKVILLE"];

var bool_comm = commNames.includes(tmpValue.toUpperCase());

if(bool_comm){
	return true;
}
else{
	console.log("No Community Match Found.");
	return false;
}
}

function getCommunity(locSplitter, lat, lng){	
	//Get community name from latitude, longitude
	map.spin(true);
	$.ajax({
		type: "POST",
        url: "./php/community/communityIntersect.php",
			data: {longitude: lng, latitude: lat},
			success:  function(response) {
				var fromPHP = JSON.parse(response);				
				console.log("Community Found: "+ fromPHP[0].name);
				var tempCommunity = fromPHP[0].name
				
								
				//SET Location Active
				activeLocation= new Location(true, locSplitter[0],tempCommunity, lat, lng);
				updateLocation(activeLocation);
				resetSearchInput();
				
					  
				  //alert(response[0].lat);
				  var marker = L.marker([lat, lng],{}).addTo(map);
				  
				  marker.bindPopup('SEARCH RESULT <br>ADDRESS: '+ locSplitter[0] + '<br> COMMUNITY: ' + tempCommunity).openPopup();
				  
				  map.flyTo([lat, lng], 15, {
							animate: true,
							duration: 2 // in seconds
				  });
				
				
			},
			error: function(XMLHttpRequest, status, error){
				map.spin(false);
				alert("ERROR:" +error+" Status "+ status);
				return "No Community Found."
			}
	}).done(function() {
		map.spin(false);
	}); 
}


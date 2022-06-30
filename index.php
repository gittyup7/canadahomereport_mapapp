<?php 

error_reporting(E_ALL);
ini_set('display_errors', 'On');

	session_start();
	if (isset( $_SESSION[ 'security_check' ] ) && $_SESSION[ 'security_check' ] === TRUE ) {
	//keep displaying page2.php
	echo '<input type="hidden" id="userIDInput" name="userIDInput" value="'. $_SESSION["user"] .'">';
?>	
<html>
<head>
  <meta charset=utf-8 />
  <title>Canada Home Report | Public</title>
  <meta name='viewport' content='width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no' />

  <!-- Load Leaflet, use newest version at http://leafletjs.com -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <link rel="stylesheet" href="css/spin.css">
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet-src.js"></script>
  <script src="js/Control.Loading.js"></script>
  <script src="js/querySwitch.js"></script>
  <script src="js/locationClass.js"></script>
  <script src="js/postGISFunctions.js"></script>
  <script src="js/headermapyyc.js"></script>
  <script src="js/geoserver.js"></script>  
  <script src="js/L.Control.HtmlLegend.js"></script> 
  <script src="js/Spin.js"></script> 
  <script src="js/leaflet.spin.min.js"></script>
  
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="js/filter.js"></script>
  <!--PDFs-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  
	
  <script>
  /*Toggle Map and Statistics*/
  var map;
  var activeLocation= new Location(false,"","",0,0);
  //alert (activeLocation.active);
  var searchMarker;
  
  

  
	
  function openTab(evt, tabName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabContent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  //Get either map or statistics tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
  //Action for statistics tab load
  //If activeLocation, refresh statistics, else display multiple community statistics
  // and hide #activeStatDiv and #nearestStatDiv
  if(tabName=="statistics"){
	  //Hide the text for Active Location
	  var locationDivs = document.getElementsByClassName("locationDivLink");
		for (i = 0; i < locationDivs.length; i++) {
			locationDivs[i].style.display = "none";
		}
		
	  if(activeLocation.active!=false && activeLocation.address!=''){
		//Active location set
		loadDBLocations();
		
		
		console.log("Generating statistics for Active Location...");
		//Show statistics for active Location
		/*var activeTemp= document.getElementById("activeStatDiv1");
		activeTemp.style.display = "block";
		var nearestTemp= document.getElementById("nearestStatDiv1");
		nearestTemp.style.display = "block";*/
		var homeListTemp= document.getElementById("homeList");
		//nearestTemp.style.display = "none";
		var removeLocTemp= document.getElementById("removeLocButton");
		//nearestTemp.style.display = "none";
		statListFunction(1);		
		
		
		
	  }
	  else{
		//No location set
		alert("No location set");
		//Show multiple community statistics
		var activeTemp= document.getElementById("activeStatDiv1");
		activeTemp.style.display = "none";
		/*var commTemp= document.getElementById("commStatDiv");
		commTemp.style.display = "none";*/
		var nearestTemp= document.getElementById("nearestStatDiv1");
		nearestTemp.style.display = "none";
		
		var locTemp= document.getElementById("locationStat2");
		locTemp.style.display = "none";
		var nearestTemp= document.getElementById("statList2");
		nearestTemp.style.display = "none";
		var activeTemp= document.getElementById("activeStatDiv2");
		activeTemp.style.display = "none";
		var nearestTemp= document.getElementById("nearestStatDiv2");
		nearestTemp.style.display = "none";
		
		var locTemp= document.getElementById("locationStat3");
		locTemp.style.display = "none";
		var nearestTemp= document.getElementById("statList3");
		nearestTemp.style.display = "none";
		var activeTemp= document.getElementById("activeStatDiv3");
		activeTemp.style.display = "none";
		var nearestTemp= document.getElementById("nearestStatDiv3");
		nearestTemp.style.display = "none";
		var homeListTemp= document.getElementById("homeList");
		nearestTemp.style.display = "none";
		var removeLocTemp= document.getElementById("removeLocButton");
		nearestTemp.style.display = "none";
		
		//setCommLocationTable();
		
		  
	  }
  }
  //Action for map tab load
  else if (tabName=="map"){
		if(activeLocation.active!=false && activeLocation.address!=''){
			var locationDivs = document.getElementsByClassName("locationDivLink");
			for (i = 0; i < locationDivs.length; i++) {
				locationDivs[i].style.display = "block";
			}}
		
		//Hide statistics for active Location
		var activeTemp= document.getElementById("activeStatDiv1");
		activeTemp.style.display = "none";
		/*var commTemp= document.getElementById("commStatDiv");
		commTemp.style.display = "none";*/
		var nearestTemp= document.getElementById("nearestStatDiv1");
		nearestTemp.style.display = "none";
		var homeListTemp= document.getElementById("homeList");
		nearestTemp.style.display = "block";
		var removeLocTemp= document.getElementById("removeLocButton");
		nearestTemp.style.display = "block";
  }
  
  
   //Populate the homeList combo
  loadDBLocations();
  

}


</script>

<script type="text/javascript" src="https://unpkg.com/tabulator-tables@4.7.2/dist/js/tabulator.min.js"></script>
<script src="js/mapyyc_statistics.js"></script>
<script src="js/nearestAJAX.js"></script>
<script src="js/L.Control.MapCenterCoord.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>

  <!-- style the map -->
  <link href="css/mapyyc_style.css" rel="stylesheet" type="text/css"/>
  <script src="https://kit.fontawesome.com/10fcba4806.js" crossorigin="anonymous"></script>
  <link href="css/Control.Loading.css" rel="stylesheet" type="text/css"/>
  <link href="css/dygraph.css" rel="stylesheet" type="text/css"/>
  <link href="css/L.Control.MapCenterCoord.css" rel="stylesheet" type="text/css"/>  
  <link href="css/L.Control.HtmlLegend.css" rel="stylesheet" type="text/css"/>
  <link href="css/tooltips.css" rel="stylesheet" type="text/css"/>
  <link href="css/filter.css" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet"> 
  <link href="https://unpkg.com/tabulator-tables@4.7.2/dist/css/tabulator.min.css" rel="stylesheet">
  
  <!-- data sources -->
 </head>
<body>
<div id="page-container">
    <div id="content-wrap">
        
  <!-- Header Menu -->
  <div id="header" class="header">
	<div id="locationLinks">
			<h5>Your Active Location </h5> <a onclick="removeActiveLocation()" class="tooltip"><i class="fa fa-window-close"></i><span class="tooltiptext">Clear the active location.</span></a>
			
		</div>
  
  <!--Search input-->
   <div class="search-container">
		<button id="geocodeButton" type="submit"  onclick="geocodeLocation()"class="headerButton tooltip"><i class="fas fa-search" ><span></span></i><span class="tooltiptext">Find the address<br/>on the map.</span></button>
		<button id="addLocButton" type="submit"  class='headerButton tooltip' onclick="addLocationToList()"><i class='fas fa-plus' ></i><span></span><i class='fas fa-home' ></i><span class="tooltiptext">Save the active<br/>location.</span></button>
		<input id="search" class="tooltip" type="text" size="28" placeholder="Enter an Address or Community" list="community_list" name="search" required minlength="3" maxlength="100">
		<button type="button" class='headerButton tooltip' onclick="showFilter()"><i class='fas fa-sliders-h' onclick=""></i><span class="tooltiptext">Find a community based<br/>on your criteria.</span></button>
		
		
	
	<div id="homeDiv">
	<form>
		<select id="homeList" onchange="homeListFunction()">
			<option value="" disabled selected>Saved Locations</option>
		</select>
	
    
	<button id="removeLocButton" type="button"  class='headerButton tooltip' onclick="removeLocationfromList()"><i class='far fa-trash-alt' ></i><span class="tooltiptext">Remove the<br/>selected location.</span></button>
	</form>
	</div></div>
	<div class="menuIcon" id="menuIcon" onclick="menuIconFunction()">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
  </div>
  
  
   
  <datalist id="community_list">
	<option value="01B"><option value="01C"><option value="01F"><option value="01G">
<option value="01H"><option value="01I"><option value="01K"><option value="02B">
<option value="02C"><option value="02E"><option value="02F"><option value="02K">
<option value="02L"><option value="03D"><option value="03W"><option value="05D">
<option value="05E"><option value="05F"><option value="05G"><option value="06A">
<option value="06B"><option value="06C"><option value="09D"><option value="09H">
<option value="09K"><option value="09O"><option value="09P"><option value="09Q">
<option value="10D"><option value="10E"><option value="12A"><option value="12B">
<option value="12C"><option value="12F"><option value="12H"><option value="12I">
<option value="12J"><option value="12K"><option value="13A"><option value="13B">
<option value="13C"><option value="13D"><option value="13E"><option value="13F">
<option value="13G"><option value="13H"><option value="13I"><option value="13J">
<option value="13K"><option value="ABBEYDALE"><option value="ACADIA">
<option value="ALBERT PARK/RADISSON HEIGHTS"><option value="ALTADORE">
<option value="ALYTH/BONNYBROOK"><option value="APPLEWOOD PARK">
<option value="ARBOUR LAKE"><option value="ASPEN WOODS">
<option value="AUBURN BAY"><option value="AURORA BUSINESS PARK">
<option value="BANFF TRAIL"><option value="BANKVIEW">
<option value="BAYVIEW"><option value="BEDDINGTON HEIGHTS">
<option value="BEL-AIRE"><option value="BELMONT">
<option value="BELTLINE"><option value="BELVEDERE">
<option value="BONAVISTA DOWNS"><option value="BOWNESS">
<option value="BRAESIDE"><option value="BRENTWOOD">
<option value="BRIDGELAND/RIVERSIDE"><option value="BRIDLEWOOD">
<option value="BRITANNIA"><option value="BURNS INDUSTRIAL">
<option value="CALGARY INTERNATIONAL AIRPORT"><option value="CAMBRIAN HEIGHTS">
<option value="CANADA OLYMPIC PARK"><option value="CANYON MEADOWS">
<option value="CAPITOL HILL"><option value="CARRINGTON">
<option value="CASTLERIDGE"><option value="CEDARBRAE">
<option value="CHAPARRAL"><option value="CHARLESWOOD">
<option value="CHINATOWN"><option value="CHINOOK PARK">
<option value="CHRISTIE PARK"><option value="CITADEL">
<option value="CITYSCAPE"><option value="CLIFF BUNGALOW">
<option value="COACH HILL"><option value="COLLINGWOOD">
<option value="COPPERFIELD"><option value="CORAL SPRINGS">
<option value="CORNERSTONE"><option value="COUGAR RIDGE">
<option value="COUNTRY HILLS"><option value="COUNTRY HILLS VILLAGE">
<option value="COVENTRY HILLS"><option value="CRANSTON">
<option value="CRESCENT HEIGHTS"><option value="CRESTMONT">
<option value="CURRIE BARRACKS"><option value="DALHOUSIE">
<option value="DEER RIDGE"><option value="DEER RUN">
<option value="DEERFOOT BUSINESS CENTRE"><option value="DIAMOND COVE">
<option value="DISCOVERY RIDGE"><option value="DOUGLASDALE/GLEN">
<option value="DOVER"><option value="DOWNTOWN COMMERCIAL CORE">
<option value="DOWNTOWN EAST VILLAGE"><option value="DOWNTOWN WEST END">
<option value="EAGLE RIDGE"><option value="EAST FAIRVIEW INDUSTRIAL">
<option value="EAST SHEPARD INDUSTRIAL"><option value="EASTFIELD">
<option value="EAU CLAIRE"><option value="EDGEMONT">
<option value="ELBOW PARK"><option value="ELBOYA">
<option value="ERIN WOODS"><option value="ERLTON">
<option value="EVANSTON"><option value="EVERGREEN">
<option value="FAIRVIEW"><option value="FAIRVIEW INDUSTRIAL">
<option value="FALCONRIDGE"><option value="FISH CREEK PARK">
<option value="FOOTHILLS"><option value="FOREST HEIGHTS">
<option value="FOREST LAWN"><option value="FOREST LAWN INDUSTRIAL">
<option value="FRANKLIN"><option value="GARRISON GREEN">
<option value="GARRISON WOODS"><option value="GLAMORGAN">
<option value="GLENBROOK"><option value="GLENDALE">
<option value="GLENDEER BUSINESS PARK"><option value="GLENMORE PARK">
<option value="GOLDEN TRIANGLE"><option value="GREAT PLAINS">
<option value="GREENVIEW"><option value="GREENVIEW INDUSTRIAL PARK">
<option value="GREENWOOD/GREENBRIAR"><option value="HAMPTONS">
<option value="HARVEST HILLS"><option value="HAWKWOOD">
<option value="HAYSBORO"><option value="HIDDEN VALLEY">
<option value="HIGHFIELD"><option value="HIGHLAND PARK">
<option value="HIGHWOOD"><option value="HILLHURST">
<option value="HORIZON"><option value="HOUNSFIELD HEIGHTS/BRIAR HILL">
<option value="HUNTINGTON HILLS"><option value="INGLEWOOD">
<option value="KELVIN GROVE"><option value="KEYSTONE HILLS">
<option value="KILLARNEY/GLENGARRY"><option value="KINCORA">
<option value="KINGSLAND"><option value="LAKE BONAVISTA">
<option value="LAKEVIEW"><option value="LEGACY">
<option value="LINCOLN PARK"><option value="LIVINGSTON">
<option value="LOWER MOUNT ROYAL"><option value="MACEWAN GLEN">
<option value="MAHOGANY"><option value="MANCHESTER">
<option value="MANCHESTER INDUSTRIAL"><option value="MAPLE RIDGE">
<option value="MARLBOROUGH"><option value="MARLBOROUGH PARK">
<option value="MARTINDALE"><option value="MAYFAIR">
<option value="MAYLAND"><option value="MAYLAND HEIGHTS">
<option value="MCCALL"><option value="MCKENZIE LAKE">
<option value="MCKENZIE TOWNE"><option value="MEADOWLARK PARK">
<option value="MEDICINE HILL"><option value="MERIDIAN">
<option value="MIDNAPORE"><option value="MILLRISE">
<option value="MISSION"><option value="MONTEREY PARK">
<option value="MONTGOMERY"><option value="MOUNT PLEASANT">
<option value="NEW BRIGHTON"><option value="NOLAN HILL">
<option value="NORTH AIRWAYS"><option value="NORTH GLENMORE PARK">
<option value="NORTH HAVEN"><option value="NORTH HAVEN UPPER">
<option value="NOSE HILL PARK"><option value="OAKRIDGE">
<option value="OGDEN"><option value="OGDEN SHOPS">
<option value="PALLISER"><option value="PANORAMA HILLS">
<option value="PARKDALE"><option value="PARKHILL">
<option value="PARKLAND"><option value="PATTERSON">
<option value="PEGASUS"><option value="PENBROOKE MEADOWS">
<option value="PINE CREEK"><option value="PINERIDGE">
<option value="POINT MCKAY"><option value="PUMP HILL">
<option value="QUEENS PARK VILLAGE"><option value="QUEENSLAND">
<option value="RAMSAY"><option value="RANCHLANDS">
<option value="RED CARPET"><option value="REDSTONE">
<option value="RENFREW"><option value="RICHMOND">
<option value="RIDEAU PARK"><option value="RIVERBEND">
<option value="ROCKY RIDGE"><option value="ROSEDALE">
<option value="ROSEMONT"><option value="ROSSCARROCK">
<option value="ROXBORO"><option value="ROYAL OAK">
<option value="ROYAL VISTA"><option value="RUNDLE">
<option value="RUTLAND PARK"><option value="SADDLE RIDGE">
<option value="SADDLE RIDGE INDUSTRIAL"><option value="SAGE HILL">
<option value="SANDSTONE VALLEY"><option value="SCARBORO">
<option value="SCARBORO/ SUNALTA WEST"><option value="SCENIC ACRES">
<option value="SECTION 23"><option value="SETON">
<option value="SHAGANAPPI"><option value="SHAWNEE SLOPES">
<option value="SHAWNESSY"><option value="SHEPARD INDUSTRIAL">
<option value="SHERWOOD"><option value="SIGNAL HILL">
<option value="SILVER SPRINGS"><option value="SILVERADO">
<option value="SKYLINE EAST"><option value="SKYLINE WEST">
<option value="SKYVIEW RANCH"><option value="SOMERSET">
<option value="SOUTH AIRWAYS"><option value="SOUTH CALGARY">
<option value="SOUTH FOOTHILLS"><option value="SOUTHVIEW">
<option value="SOUTHWOOD"><option value="SPRINGBANK HILL">
<option value="SPRUCE CLIFF"><option value="ST. ANDREWS HEIGHTS">
<option value="STARFIELD"><option value="STONEGATE LANDING">
<option value="STONEY 1"><option value="STONEY 2">
<option value="STONEY 3"><option value="STONEY 4">
<option value="STRATHCONA PARK"><option value="SUNALTA">
<option value="SUNDANCE"><option value="SUNNYSIDE">
<option value="SUNRIDGE"><option value="TARADALE">
<option value="TEMPLE"><option value="THORNCLIFFE">
<option value="TUSCANY"><option value="TUXEDO PARK">
<option value="UNIVERSITY DISTRICT"><option value="UNIVERSITY HEIGHTS">
<option value="UNIVERSITY OF CALGARY"><option value="UPPER MOUNT ROYAL">
<option value="VALLEY RIDGE"><option value="VALLEYFIELD">
<option value="VARSITY"><option value="VISTA HEIGHTS">
<option value="WALDEN"><option value="WEST HILLHURST">
<option value="WEST SPRINGS"><option value="WESTGATE">
<option value="WESTWINDS"><option value="WHITEHORN">
<option value="WILDWOOD"><option value="WILLOW PARK">
<option value="WINDSOR PARK"><option value="WINSTON HEIGHTS/MOUNTVIEW">
<option value="WOLF WILLOW"><option value="WOODBINE">
<option value="WOODLANDS"><option value="YORKVILLE">
  </datalist>
  
  <!--Overlay/Filter Div-->
  <div id="overlay"  style="display:none;">
	<div id="filterDiv" >
		<h2 style="float: left;">Find a Community for You </h2>
		
		<button class="close-button"  onclick="showFilter();" type="button" >
			<span >X</span>
		</button>
		<button id="clearFilterButton" class="apply-button"  disabled=true" onclick="document.getElementById('filterForm').reset(); document.getElementById('clearFilterButton').disabled = true;" type="button" >
			<span >Clear Filter</span>
		</button>
		<button class="apply-button"  onclick="filterFormSubmit();" type="button" >
			<span >Apply Filter</span>
		</button>
		
		<form id="filterForm" name="filterForm" action="">

		

		<!-- One "tab" for each step in the form: -->
		<div class="filterTab">
			<h2 class="filterTitle">Safety Considerations</h2><div class="description" style="float:right;">Discover communities that suit your personal home safety preferences.</div>
			
			<div class="filterRow">
				<p class="filterP">I want a fire station within</p>
					<select onchange="this.className = 'valid'" class="" style="" id="fireServices" name="fireServices">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="0">0 meters (inside the bounds)</option>
						<option value="455">500 meters</option>
						<option value="1100">1500 meters</option>						
						<option value="">Not a Consideration</option>
					</select>
				<p class="filterP">of my community.</p>
				</div>
			<div class="filterRow">
				<p class="filterP">I want a police station within</p>
					<select onchange="this.className = 'valid'" class="" style="" id="policeServices" name="policeServices">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="0">0 meters (inside the bounds)</option>
						<option value="455">500 meters</option>
						<option value="1100">1500 meters</option>	
						<option value="">Not a Consideration</option>
					</select>
				<p class="filterP">of my community.</p>
				</div>
			<div class="filterRow">
				<p class="filterP">I want a hospital within </p>
					<select onchange="this.className = 'valid'" class="" style="" id="hospitalServices" name="hospitalServices">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="0">0 meters (inside the bounds)</option>
						<option value="455">500 meters</option>
						<option value="1100">1500 meters</option>	
						<option value="">Not a Consideration</option>
					</select>
				<p class="filterP">of my community.</p>
				</div>
			<div class="filterRow">
			<p class="filterP">Only show me communities with a </p>
				<select onchange="this.className = 'valid'" class="" style="" id="crimeRate" name="crimeRate">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="50">Very Low</option>
						<option value="100">Low (Top 100)</option>
						<option value="175">Average or Better</option>
						<option value="">Not a Consideration</option>
					</select>
				<p class="filterP">rate of crime</p>
			</div>
		</div>

		<div class="filterTab">
			<h2 class="filterTitle">Resale Factors</h2><div class="description" style="float:right;">Buying a home is the biggest financial gamble most people ever have to take.  With that in mind, it's worth considering factors that affect how attractive your home may appear to future home-buyers.  </div>
			<div class="filterRow">
		  <p class="filterP">I want to avoid major sources of traffic noise (freeways).</p>
			<select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="noiseSource" name="noiseSource">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="1600">Major Priority</option>
						<option value="800">Medium Priority</option>
						<option value="100">Low Priority</option>
						<option value="">Not a Consideration</option>
					</select>
			</div>
			<div class="filterRow">
		  <p class="filterP">I want to avoid major sources of odor (waste treatment facilities).</p>
		  <select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="smellSource" name="smellSource">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="1600">Major Priority</option>
						<option value="800">Medium Priority</option>
						<option value="100">Low Priority</option>
						<option value="">Not a Consideration</option>
					</select>
			</div>
			<div class="filterRow">
		  <p class="filterP">I want to avoid areas of industrial pollution (adjacent to industrial zoning).</p>
		  <select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="industrialSource" name="industrialSource">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="1600">Major Priority</option>
						<option value="800">Medium Priority</option>
						<option value="100">Low Priority</option>
						<option value="">Not a Consideration</option>
					</select>
			</div>
		</div>

		<div class="filterTab">
			<h2 class="filterTitle">Services</h2><div class="description" style="float:right;">Community services range from necessities like schools and transit, to amenities like libraries and restaurants.</div>
			<div class="filterRow">
		  <p class="filterP">I would like a/an </p> 
		  <select onchange="this.className = 'valid'" class="" style="" id="schoolFilter" name="schoolFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="elem">Elementary</option>
						<option value="jrhigh">Junior High</option>
						<option value="high">High</option>
						<option value="">Not a Consideration</option>
					</select>
					<p class="filterP"> school in my community.</p>								 
			</div>
			<div class="filterRow">
		  <p class="filterP">I want easy access to bus transit.</p>
				<select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="busTransitFilter" name="busTransitFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="400">Walking distance (400m)</option>
						<option value="1000">Biking distance (1000m)</option>
						<option value="">Not a Consideration</option>
					</select>					
			</div>
			
			<div class="filterRow">
		  <p class="filterP">I want easy access to LRT transit.</p>
				<select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="lrtTransitFilter" name="lrtTransitFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="400">Walking distance (400m)</option>
						<option value="1000">Biking distance (1000m)</option>
						<option value="2000">Car ride (2 km)</option>
						<option value="">Not a Consideration</option>
					</select>					
			</div>
			
			<div class="filterRow">
		  <p class="filterP">I want easy access to a public library.</p>				
				<select onchange="this.className = 'valid'" class="endFilterSelect" style="" id="libraryFilter" name="libraryFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="400">Walking distance (400m)</option>
						<option value="1000">Biking distance (1000m)</option>
						<option value="2000">Car ride (2 km)</option>
						<option value="">Not a Consideration</option>
					</select>	
			</div>			
		</div>

		<div class="filterTab">
			<h2 class="filterTitle">Recreation</h2><div class="description" style="float:right;">Having access to recreation is an important consideration for home owners, and generally improve the value of your home.  If you prefer a specific sport facility, pick one from the options below   </div>
			<!--<div class="filterRow">
		  <p class="filterP">I want a public park in my communiy.</p>
				<input type="checkbox" id="pParkFilter" class="filterCheckbox" style="float:right;" name="pParkFilter">			
					
			</div>-->
			<div class="filterRow">
		  <p class="filterP">I want my community to be adjacent to a provincial park.</p>
				<input type="checkbox" id="majParkFilter" class="filterCheckbox" style="float:right;" name="majParkFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want paved Bicycle paths in my community.</p>
					<input type="checkbox" id="pathFilter" class="filterCheckbox" style="float:right;" name="pathFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Children's Playground in my community.</p>			
					<input type="checkbox" id="playgroundFilter" class="filterCheckbox" style="float:right;" name="playgroundFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Dog Park in my community.</p>
					<input type="checkbox" id="dogParkFilter" class="filterCheckbox" style="float:right;" name="dogParkFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Baseball Field in my community.</p>
					<input type="checkbox" id="baseballFilter" class="filterCheckbox" style="float:right;" name="baseballFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Basketball Court in my community.</p>
					<input type="checkbox" id="basketballFilter" class="filterCheckbox" style="float:right;" name="basketballFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Cricket Field in my community.</p>
					<input type="checkbox" id="cricketFilter" class="filterCheckbox" style="float:right;" name="cricketFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Football Field in my community.</p>
					<input type="checkbox" id="footballFilter" class="filterCheckbox" style="float:right;" name="footballFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Frisbee/Disc Golf Course in my community.</p>
					<input type="checkbox" id="frisbeeFilter" class="filterCheckbox" style="float:right;" name="frisbeeFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Hockey Rink in my community.</p>
					<input type="checkbox" id="hockeyFilter" class="filterCheckbox" style="float:right;" name="hockeyFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Skateboard Park in my community.</p>
					<input type="checkbox" id="skateboardFilter" class="filterCheckbox" style="float:right;" name="skateboardFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Sled Hill in my community.</p>
					<input type="checkbox" id="sledFilter" class="filterCheckbox" style="float:right;" name="sledFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Soccer Field in my community.</p>
					<input type="checkbox" id="soccerFilter" class="filterCheckbox" style="float:right;" name="soccerFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Tennis Court in my community.</p>
					<input type="checkbox" id="tennisFilter" class="filterCheckbox" style="float:right;" name="tennisFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Track & Field facility in my community.</p>
					<input type="checkbox" id="trackFilter" class="filterCheckbox" style="float:right;" name="trackFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>
			<div class="filterRow">
		  <p class="filterP">I want a Volleyball Court in my community.</p>
					<input type="checkbox" id="volleyballFilter" class="filterCheckbox" style="float:right;" name="volleyballFilter" value="false" onchange="checkFilterCheckbox(this.id)">
			</div>			
		  
		</div>
		
		<div class="filterTab">
			<h2 class="filterTitle">Demographics</h2><div class="description" style="float:right;">Demographics can affect the character of your community and likelihood that you will relate to your new neighbours.</div>
			<div class="filterRow">
		  <p class="filterP">I prefer to live among younger families.</p>
				<select onchange="this.className = 'valid'" class="" style="float:right;" id="youngFilter" name="youngFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="20">>20% of Community</option>
						<option value="10">>10% of Community</option>						
						<option value="5">>5% of Community</option>
						<option value="">Not a Consideration</option>
					</select>
			</div>
			<div class="filterRow">
		  <p class="filterP">I prefer to live among older adults (65+).</p>
				<select onchange="this.className = 'valid'" class="" style="float:right;" id="seniorFilter" name="seniorFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="10">>10% of Community</option>						
						<option value="5">>5% of Community</option>
						<option value="neutral">Not a Consideration</option>
					</select>
			</div>
			<!--<div class="filterRow">
		  <p class="filterP">I prefer to live among people of different ethnicities.</p>
				<select onchange="this.className = 'valid'" class="" style="float:right;" id="ethnicFilter" name="ethnicFilter">
						<option value="" disabled selected>&lt;Select&gt;</option>
						<option value="most">>25% of Community</option>
						<option value="more">10-25% of Community</option>						
						<option value="less">0-10% of Community</option>
						<option value="neutral">Not a Consideration</option>
					</select>
			</div>-->
			
		</div>

		<div style="overflow:auto;">
			
		  <div style="float:right;">
			<button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
			<button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
		  </div>
		</div>

		<!-- Circles which indicates the steps of the form: -->
		<div style="text-align:center;margin-top:40px;">
		  <span class="step"></span>
		  <span class="step"></span>
		  <span class="step"></span>
		  <span class="step"></span>
		  <span class="step"></span>
		</div>

		</form>
		
	</div>
  </div>
  
  <!-- Side Menu -->
  <div id="mySidenav" class="sidenav">
  <!--<a href="#">About</a>-->
  
  <div class="dropdown">
	<a class="parent-layer" id="safety" href="#"  onclick="layerToggle('safety')">Safety Considerations</a>
	<div id="safety-child" class="dropdown-content">
			<a class="child-layer" id ="cr3" href="#"  onclick="layerToggle('cr3')">Overall Crime Rate</a>
			<a class="child-layer" id ="cr1" href="#"  onclick="layerToggle('cr1')">Property Crime Rate</a>
			<a class="child-layer" id ="cr2" href="#"  onclick="layerToggle('cr2')">Violent Crime Rate</a>
			<a class="child-layer" id ="es1" href="#"  onclick="layerToggle('es1')">Police Stations</a>
			<a class="child-layer" id ="es5" href="#"  onclick="layerToggle('es5')">Correctional Facilities</a>
			<a class="child-layer" id ="es2" href="#"  onclick="layerToggle('es2')">Fire Stations</a>
			<a class="child-layer" id ="es4" href="#"  onclick="layerToggle('es4')">Hospitals</a>			
	</div>	
  </div>
  <div class="dropdown">
	<a class="parent-layer" id="resale" href="#"  onclick="layerToggle('resale')">Resale Factors</a>
	<div id="resale-child" class="dropdown-content">
			<!--MEMORY<a class="child-layer" id ="es6" href="#"  onclick="layerToggle('es6')">Flood Risk</a>-->
			<a class="child-layer" id ="o3" href="#"  onclick="layerToggle('o3')">Water Treatment Lagoons</a>
			<a class="child-layer" id ="o7" href="#"  onclick="layerToggle('o7')">Land Use Zoning</a>
			<a class="child-layer" id ="o6" href="#"  onclick="layerToggle('o6')">Major Roads</a>
			<a class="child-layer" id ="o5" href="#"  onclick="layerToggle('o5')">Railroad Tracks</a>
			<a class="child-layer" id ="o2" href="#"  onclick="layerToggle('o2')">Landfill Locations</a>
			<a class="child-layer" id ="o1" href="#"  onclick="layerToggle('o1')">Cemetery Locations</a>
			<a class="child-layer" id ="o4" href="#"  onclick="layerToggle('o4')">Utility / Pipeline Corridor</a>
			
	</div>	
  </div>
  <div class="dropdown">
  <a class="parent-layer" id="realEstate" href="#"  onclick="layerToggle('realEstate')">Real Estate</a>
			<div id="realEstate-child" class="dropdown-content">
			<a class="child-layer" id ="re1" href="#"  onclick="layerToggle('re1')">Homes for Sale</a>
			<a class="child-layer" id ="re2" href="#"  onclick="layerToggle('re2')">Average Listing Price</a>			
			<!--<a class="child-layer" id ="cl3" href="#"  onclick="layerToggle('cl3')">Average Property Assessment</a>-->
		</div>			
  </div>
  
  <div class="dropdown">
  <a class="parent-layer" id="services" href="#"  onclick="layerToggle('services')">Services</a>
			<div id="services-child" class="dropdown-content">
			<a class="child-layer" id ="es3" href="#"  onclick="layerToggle('es3')">Community Health Centers</a>
			<a class="child-layer" id ="s1" href="#"  onclick="layerToggle('s1')">Elementary Schools</a>
			<a class="child-layer" id ="s2" href="#"  onclick="layerToggle('s2')">Junior High Schools</a>
			<a class="child-layer" id ="s3" href="#"  onclick="layerToggle('s3')">Senior High Schools</a>			
			<a class="child-layer" id ="s4" href="#"  onclick="layerToggle('s4')">Post-Secondary Centers</a>		
			<a class="child-layer" id ="s5" href="#"  onclick="layerToggle('s5')">Transit Bus Stops</a>			
			<!--<a class="child-layer" id ="s6" href="#"  onclick="layerToggle('s6')">Transit Bus Routes</a>-->				
			<a class="child-layer" id ="s7" href="#"  onclick="layerToggle('s7')">Transit LRT Stops</a>				
			<!--<a class="child-layer" id ="s8" href="#"  onclick="layerToggle('s8')">Transit LRT Routes</a>-->
			<a class="child-layer" id ="c2" href="#"  onclick="layerToggle('c2')">Community Centers</a>
			<a class="child-layer" id ="c3" href="#"  onclick="layerToggle('c3')">Libraries</a>			
		</div>
  </div>
  
  <div class="dropdown">
  <a class="parent-layer" id="recreation" href="#"  onclick="layerToggle('recreation')">Recreation</a>
		<div id="recreation-child" class="dropdown-content">			
			<a class="child-layer" id ="r4" href="#"  onclick="layerToggle('r4')">City Parks</a>
			<a class="child-layer" id ="r5" href="#"  onclick="layerToggle('r5')">Provincial Parks</a>
			<a class="child-layer" id ="r6" href="#"  onclick="layerToggle('r6')">Walking/Bicycle Paths</a>	
			<a class="child-layer" id ="r7" href="#"  onclick="layerToggle('r7')">Playgrounds</a>
			<a class="child-layer" id ="r1" href="#"  onclick="layerToggle('r1')">Sports Facilities</a>
			<a class="child-layer" id ="r2" href="#"  onclick="layerToggle('r2')">Water Facilities</a>
			<a class="child-layer" id ="r3" href="#"  onclick="layerToggle('r3')">Dog Parks</a>	
		</div>
  </div>
  
  <div class="dropdown">
  <a class="parent-layer" id="shopping" href="#"  onclick="layerToggle('shopping')">Shopping & Entertainment</a>
	<div id="shopping-child" class="dropdown-content">
			<a class="child-layer" id ="c1" href="#"  onclick="layerToggle('c1')">Attractions</a>
			<a class="child-layer" id ="sh1" href="#"  onclick="layerToggle('sh1')">Shopping Malls / Plazas</a>
			<!--<a class="child-layer" id ="sh3" href="#"  onclick="layerToggle('sh3')">Grocery Stores</a>-->
			<a class="child-layer" id ="sh4" href="#"  onclick="layerToggle('sh4')">Restaurants</a>
			<a class="child-layer" id ="sh5" href="#"  onclick="layerToggle('sh5')">Gas Stations</a>
		</div>
		
  </div>
  
  <div class="dropdown">
  <a class="parent-layer" id="demographics" href="#"  onclick="layerToggle('demographics')">Demographics</a>
	<div id="demographics-child" class="dropdown-content">
			<a class="child-layer" id ="d1" href="#"  onclick="layerToggle('d1')">Population % Under 19</a>
			<a class="child-layer" id ="d2" href="#"  onclick="layerToggle('d2')">Population % Over 65</a>
			<a class="child-layer" id ="d3" href="#"  onclick="layerToggle('d3')">Median Individual Income</a>
			<a class="child-layer" id ="d6" href="#"  onclick="layerToggle('d6')">Median Household Income</a>
			<!--<a class="child-layer" id ="d4" href="#"  onclick="layerToggle('d4')">Immigration %</a>
			<a class="child-layer" id ="d5" href="#"  onclick="layerToggle('d5')">2017 Provincial Election Results</a>-->
		</div>	
  </div>			  
</div>

<!--Statistics DIV -->
<div id="mySideStats" class="sidestats">
	<h3 class="sideStatsTitle">Layer Statistics <span onclick="removeActiveLayer();" class="removeActiveLayerButton">Close</span></h3>
	<div id="sideStatsTable" class="sideStatsTable">


	</div>

</div>

  <!-- the map -->
	<div class="locationDivLink" style="left:15px; top:3.8em; display:none;">
		<p id="addressLDL" class="locationALink" href=""></p>
	</div>
			
	<div class="locationDivLink" style="left:15px; top:6.3em; display:none;">
		<p id="communityLDL" class="locationALink" href=""></p>
	</div>			
			
	<div class="locationDivLink" style="left:15px; top: 8.8em; display:none;">
		<p id="cityLDL" class="locationALink" href=""></p>
	</div>
			
  <div id="map" class="tabContent" style="display:block"></div>
  
  <!-- the statistics --> 
  <div id="statistics" class="tabContent">
	<div id="statsLeft">
		<div class="statTab">
			<button class="statTablinks" onclick="openStatLocationTab(event, 'home1')">Home 1</button>
			<button class="statTablinks" onclick="openStatLocationTab(event, 'home2')">Home 2</button>
		</div>

		<div id="home1" class="statTabcontent">
			<div>
				<input type="radio" id="home1Loc" name="home1Loc" value="loc1" onchange="showLocOrComm1(this.value);">
				<label for="home1Loc">Location</label>
			</div>
			<div>
				<input type="radio" id="home1Comm" name="home1Loc" value="comm1" onchange="showLocOrComm1(this.value);">
				<label for="home1Comm">Community</label>
			</div>	

			<div>
				<form>
					<select id="statList1" class="statList" name="statList1" onchange="statListFunction(1)">
						<option value="" disabled selected>Saved Locations</option>
					</select>
				</form>
				<form>
					<select id="commList1" class="statList" name="commList1" onchange="statListFunction(1)">
						<option value="" disabled selected>Saved Locations</option>
					</select>
				</form>
			</div>
			
		</div>

		<div id="home2" class="statTabcontent">
			<div>
				<input type="radio" id="home2Loc" name="home2Loc" value="loc2" onchange="showLocOrComm2(this.value);">
				<label for="home2Loc">Location</label>
			</div>
			<div>
				<input type="radio" id="home2Comm" name="home2Loc" value="comm2" onchange="showLocOrComm2(this.value);">
				<label for="home2Comm">Community</label>
			</div>	

			<div>
				<form>
					<select id="statList2" class="statList" name="statList2" onchange="statListFunction(2)">
						<option value="" disabled selected>Saved Locations</option>
					</select>
				</form>
				<form>
					<select id="commList2" class="statList" name="commList2" onchange="statListFunction(2)">
						<option value="" disabled selected>Saved Locations</option>
					</select>
				</form>
			</div>
			
		</div>
		</div>
	<!--Location 1-->
	<div id="locationStat1" class="locationStat">
	
	<div id="activeStatDiv1" class="statTableDiv left">
		<h2 class="title clear">Location Statistics</h2>
		<div id = "activeStatDivTable1" class = "activeStatDivTable"></div>
		<div id = "commStatDivTableTop1"></div>
		<div id = "commStatDivTableMiddle1"></div>
		<div id = "commStatDivTableBottom1"></div>
	</div>
	<div id="nearestStatDiv1" class="statTableDiv nearestStatDiv left">
		<h2 class="title clear">Location Summary</h2>
		<div id = "nearestStatDivTable1" class="nearestStatDivTable">
			<div id = "nearestLeftCol" class="left">
			<h3 class="comms">CLOSEST COMMUNITIES</h3><div id = "nearestComms1" class="comms">
			</div>
			<h3 class="clear">EMERGENCY SERVICES</h3>
			<p class="">Nearest Fire Station</p><div id = "nearestFS1" class="">
			</div>
			<p class="">Nearest Police Station</p><div id = "nearestPS1" class="">
			</div>
			<p class="">Nearest Hospital</p><div id = "nearestHO1" class="">
			</div>
			<p class="">Nearest Health Center</p><div id = "nearestHC1" class="">
			</div>		
			<h3 class="clear">EDUCATIONAL SERVICES</h3>
			<p class="">Nearest Elementary School</p><div id = "nearestES1" class="">
			</div>
			<p class="">Nearest Junior High School</p><div id = "nearestJHS1" class="">
			</div>
			<p class="">Nearest High School</p><div id = "nearestHS1" class="">
			</div>
			<p class="">Nearest Post-Secondary School</p><div id = "nearestPSS1" class="">
			</div>
			<h3 class="clear">COMMUNITY SERVICES</h3>
					
			<p class="library">Nearest Library</p><div id = "nearestLibrary1" class=" library">
			</div>
			<p class="attractions">Nearest Attractions</p><div id = "nearestAttractions1" class=" attractions">
			</div>
			<h3 class="clear">RECREATION</h3>
			<p class="playgrounds">Nearest Playground Facilities</p><div id = "nearestPlaygrounds1" class="playgrounds">
			</div>
			<p class="">Nearest Sports Facilities</p><div id = "nearestSports1" class="">
			</div>
			
			<p class="">Nearest Local Park</p><div id = "nearestRP1" class="">
			</div>
			<p class="">Nearest Provincial Park</p><div id = "nearestPP1" class="">
			</div>
			<h3 class="clear">TRANSIT</h3>
			<p class="">Nearest Bus Stop</p><div id = "nearestTBS1" class="">
			</div>
			<p class="">Nearest LRT Station</p><div id = "nearestTLS1" class="">
			</div>
			
			<!--<div id = "nearestFlood" class="left">
			</div>-->
			<h3 class="clear">COMFORT & RESALE CONSIDERATIONS</h3>
			<p class="">Nearest Cemetery</p><div id = "nearestCemetery1" class="">
			</div>
			<p class="">Nearest Landfill</p><div id = "nearestLandfill1" class="">
			</div>
			<p class="">Nearest Effluent Treatment</p><div id = "nearestWaterTreatment1" class="">
			</div>
			<p class="">Nearest Railroad Tracks</p><div id = "nearestRailroad1" class="">
			</div>
			
			<h3 class="clear">SHOPPING & RESTAURANTS</h3>		
			
			<p class="mall">Nearest Shopping Malls / Markets</p><div id = "nearestMall1" class=" mall">
			</div>
			<p class="restaurant">Nearest Restaurants</p><div id = "nearestRestaurants1" class=" restaurant">
			</div>			
			<p class="gas">Nearest Gas Station</p><div id = "nearestGas1" class=" gas">
			</div>
			
				</div>
			</div>
		</div>
	</div>
	
	<!--Location 2-->	
	<!--<div id="locationStat2" class="locationStat">
	<form>
		<select id="statList2" class="statList" name="statList2" onchange="statListFunction(2)">
			<option value="" disabled selected>Saved Locations</option>
		</select>
	</form>
	<div id="activeStatDiv2" class="statTableDiv left">
		<h2 class="title clear">Location Statistics</h2>
		<div id = "activeStatDivTable2" class = "activeStatDivTable"></div>
		<div id = "commStatDivTableTop2"></div>
		<div id = "commStatDivTableMiddle2"></div>
		<div id = "commStatDivTableBottom2"></div>
	</div>
	<div id="nearestStatDiv2" class="statTableDiv nearestStatDiv left">
		<h2 class="title clear">Location Summary</h2>
		<div id = "nearestStatDivTable2" class="nearestStatDivTable">
			<div id = "nearestLeftCol" class="left">
			<h3 class="comms">CLOSEST COMMUNITIES</h3><div id = "nearestComms2" class="comms">
			</div>
			<h3 class="clear">EMERGENCY SERVICES</h3>
			<p class="">Nearest Fire Station</p><div id = "nearestFS2" class="">
			</div>
			<p class="">Nearest Police Station</p><div id = "nearestPS2" class="">
			</div>
			<p class="">Nearest Hospital</p><div id = "nearestHO2" class="">
			</div>
			<p class="">Nearest Health Center</p><div id = "nearestHC2" class="">
			</div>		
			<h3 class="clear">EDUCATIONAL SERVICES</h3>
			<p class="">Nearest Elementary School</p><div id = "nearestES2" class="">
			</div>
			<p class="">Nearest Junior High School</p><div id = "nearestJHS2" class="">
			</div>
			<p class="">Nearest High School</p><div id = "nearestHS2" class="">
			</div>
			<p class="">Nearest Post-Secondary School</p><div id = "nearestPSS2" class="">
			</div>
			<h3 class="clear">COMMUNITY SERVICES</h3>
					
			<p class="library">Nearest Library</p><div id = "nearestLibrary2" class=" library">
			</div>
			<p class="attractions">Nearest Attractions</p><div id = "nearestAttractions2" class=" attractions">
			</div>
			<h3 class="clear">RECREATION</h3>
			<p class="playgrounds">Nearest Playground Facilities</p><div id = "nearestPlaygrounds2" class="playgrounds">
			</div>
			<p class="">Nearest Sports Facilities</p><div id = "nearestSports2" class="">
			</div>
			<p class="">Nearest Local Park</p><div id = "nearestRP2" class="">
			</div>
			<p class="">Nearest Provincial Park</p><div id = "nearestPP2" class="">
			</div>
			<h3 class="clear">TRANSIT</h3>
			<p class="">Nearest Bus Stop</p><div id = "nearestTBS2" class="">
			</div>
			<p class="">Nearest LRT Station</p><div id = "nearestTLS2" class="">
			</div>
			<h3 class="clear">COMFORT & RESALE CONSIDERATIONS</h3>
			<p class="">Nearest Cemetery</p><div id = "nearestCemetery2" class="">
			</div>
			<p class="">Nearest Landfill</p><div id = "nearestLandfill2" class="">
			</div>
			<p class="">Nearest Effluent Treatment</p><div id = "nearestWaterTreatment2" class="">
			</div>
			<p class="">Nearest Railroad Tracks</p><div id = "nearestRailroad2" class="">
			</div>
			
			<h3 class="clear">SHOPPING & RESTAURANTS</h3>		
			
			<p class="mall">Nearest Shopping Malls / Markets</p><div id = "nearestMall2" class=" mall">
			</div>
			<p class="restaurant">Nearest Restaurants</p><div id = "nearestRestaurants2" class=" restaurant">
			</div>			
			<p class="gas">Nearest Gas Station</p><div id = "nearestGas2" class=" gas">
			</div>
			
				</div>
			</div>
		</div>-->
	</div>
	
	
  </div> <!--Content-wrap-->
    
<!-- Footer Menu -->
  <div id="footer" class="footer">
	<button type="submit"  class="footerButton" onclick="help()"><i class="fa fa-question-circle" ></i><span class="footerSpan" >Help</span></button>
	<!--<button type="submit"  class="footerButton" onclick=""><i class="fa fa-eye" ></i><span class="footerSpan" >Show me the nearest:</span></button>-->
    
        <!--<select id="queryType" name="queryType">
            <option value="nearest">the nearest </option>
            <option value="showMe">every single</option>
            <option value="howFar">how to drive to</option>
        </select>-->
        <!--<select id="layerName" name="layerName">
            <option value="com_services_libraries_point">Library</option>
            <option value="business_restaurants_point">Restaurant</option>
            <option value="business_gas_stations_point">Gas Station</option>
            <option value="business_malls_markets_point">Mall/Marketplace</option>
            <option value="com_services_com_centers_point">Community Center</option>
            <option value="emergency_fire_stations_point">Fire Station</option>
            <option value="emergency_health_centers_point">Community Health Center</option>
            <option value="emergency_hospitals_point">Hospital</option>
            <option value="emergency_police_stations_point">Police Station</option>
            <option value="other_cemeteries_polygon">Cemetery</option>
            <option value="other_landfills_polygon">Landfill</option>
            <option value="rec_parks_polygon">Park</option>
            <option value="rec_sports_baseball_polygon">Baseball Field</option>
            <option value="rec_sports__basketball_polygon">Basketball Court</option>
            <option value="rec_sports_football_polygon">Football Field</option>
            <option value="rec_sports_skate_parks_polygon">Skateboard Park</option>
            <option value="rec_sports_skating_rinks_polygon">Skating Rink</option>
            <option value="rec_sports_soccer_polygon">Soccer Field</option>
            <option value="schools_elementary_point">Elementary School</option>
            <option value="schools_jr_high_point">Jr. High School</option>
            <option value="schools_high_point">High School</option>
            <option value="schools_post_sec_point">Post Secondary School</option>
            <option value="transit_bus_stops_csv_pts">Bus Stop</option>
            <option value="transit_lrt_stops_csv_pts">LRT Stop</option>
        </select>-->
        <input type="hidden" id="longitude" name="longitude" value="-114.3680216">
        <input type="hidden" id="latitude" name="latitude" value="51.0272883">
        <!--<button type="submit"  class="footerButton tabLinks" onclick="">
			<i class="fa fa-chevron-right"></i>
			<span class="footerSpan" >Report Generator</span>
		</button>-->
		<button type="submit"  class="footerButton tabLinks" onclick="openTab(event,'statistics')">
			<i class="fa fa-chevron-right"></i>
			<span class="footerSpan" >Analysis</span>
		</button>
		<button type="submit"  id="defaultMode" class="footerButton tabLinks" onclick="openTab(event,'map')">
			<i class="fa fa-chevron-right" ></i>
			<span class="footerSpan" >Map</span>
		</button>
		
      
    </div>
	
	<script src="js/mapyyc.js"></script>
	<script src="js/geocoder.js"></script>
	<script src="js/mapyyc_legends.js"></script>
</div>
</body>
</html>
<?php
	} else {
		header('Location: php/base/openSession.php');
		exit;
	}
	
	
	//clear variables
	session_unset();

	// destroy the session
	session_destroy();
?>
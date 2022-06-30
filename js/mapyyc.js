// MAP
// Set the map center and zoom level for Calgary
  map = L.map('map', {loadingControl: true,
    zoomControl: false}).setView({lat:51.0346, lng:-114.0708}, 10);
	
  map.invalidateSize(true);
  // Initialize the longitude and latitude fields

  document.getElementById("longitude").value = map.getCenter().lng;
  document.getElementById("latitude").value = map.getCenter().lat;
  
 ///loadDBLocations();
 
 
 //Capture enter key on text fields
 // Get the input field
var srchInput = document.getElementById("search");

// Execute a function when the user releases a key on the keyboard
srchInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("geocodeButton").click();
  }
});
  
//set longitude and latitude values for operations requiring those values
  map.on('moveend', function(event) {
	
	document.getElementById("longitude").value = map.getCenter().lng;
	document.getElementById("latitude").value = map.getCenter().lat;
	
	//updateStats();
	
  });
   map.on('zoomend', function(event) {
	map.invalidateSize(true);	
  });


// layer toggle for background layers - global variable with (null, null) allows indiv basemaps and overlays to be added inside functions below
  var controlLayers = L.control.layers( null, null, {
    position: "topright",
    collapsed: true // false = open by default
  }).addTo(map);  
  
// add zoomControl to map
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  
  
//Add legend to map
/*	var htmlLegendSportsFacilities = L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Hockey Rink', 
				html: '<i class="divIcon fas fa-hockey-puck awesome-legend" aria-hidden="true"></i>'
		}]},{
			elements: [{
				label: 'Soccer Field', 
				html: '<i class="divIcon fas fa-futbol awesome-legend" aria-hidden="true"></i>'
			}]
		}],
		detectStretched: true
	});
	
	 map.addControl(htmlLegendSportsFacilities);*/
	 
// display central cursor
  L.control.mapCenterCoord().addTo(map);

// BASELAYERS

// Styles for GEOJSON 
  var defaultPolyStyle = {
    "color": "#546db8",
	"fillColor": "#8ce6ff", 
    "weight": 2,
    "opacity": 0.8
  };
  var defaultPointStyle = {
    radius: 8,
    fillColor: "#fff200",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
  };
  
  function getCommTypeColor(d) {
	  //#8dd3c7 #ffffb3 #bebada #fb8072 #80b1d3
	  switch(d){
		  case('Industrial'):
		  return '#fb8072';
		  case('Major Park'):
		  return '#8dd3c7';
		  case('Residential'):
		  return '#ffffb3';
		  case('Residual Sub Area'):
		  return '#80b1d3';
		  default:
		  return '#bebada';
  }}
  
  function commTypeStyle(feature) {
    return {
        fillColor: getCommTypeColor(feature.properties.class),
        weight: 2,
        opacity: 0.8,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }

function commStyle(feature) {
    return {
        fillColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
        weight: 2,
        opacity: 0.8,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }
  
  function boundaryStyle(feature) {
    return {
        weight: 3,
        opacity: 1,
        color: 'white',
        fillOpacity: 0
    };
}
// Base Layers

  var Esri_DeLorme = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Contains information licensed under the Open Government Licence – City of Calgary, Imagery Tiles &mdash; Copyright: &copy; Esri, 2012 DeLorme',
	minZoom: 1,
	maxZoom: 20
  });
  
//Add base layer to legend
  controlLayers.addBaseLayer(Esri_DeLorme, 'ESRI Delorme');
  


  var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Contains information licensed under the Open Government Licence – City of Calgary, Imagery Tiles &mdash; Copyright: &copy; Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

//Add base layer to legend
  controlLayers.addBaseLayer(Esri_WorldImagery, 'ESRI Satellite');
 
// Toggleable layers
  var wmsLayer;
  var lrtLine;

  //Load LRT GEOJSON Layer  
   $.ajax({
        url: "layer_data/Calgary_LRT_Line.geojson",
		beforeSend: function(xhr){
			if (xhr.overrideMimeType)
            {
				xhr.overrideMimeType("application/json");
            }
            },
			dataType: 'json',
			data: null,
			success:  function(data, textStatus, request) {
				lrtLine = L.geoJson(data, {
	  style: function(feature) {
        switch (feature.properties.route_long) {
            case 'Blue Line - Saddletowne \/ 69 Street CTrain': return {color: "#0409c8",
			"weight": 4,
			"opacity": 0.65};
            case 'Red Line - Tuscany \/ Somerset CTrain':   return {"color": "#ab0900",
			"weight": 4,
			"opacity": 0.65};
        }
    },
      onEachFeature: function (feature, layer) {
        layer.bindPopup('Line Description: '+ feature.properties.route_long + '<br> Route #: ' + feature.properties.route_num + '<br> Line Starts At: ' + feature.properties.start_stn + '<br>Line Ends At: ' + feature.properties.end_stn  + '<br>Direction of Travel: ' + feature.properties.direction + '<br>Date Updated:' + feature.properties.current_da);
      }
    });
	
	// Add layer to the map control
    controlLayers.addOverlay(lrtLine, 'LRT Routes');
  }}); 
	
// Add Community Boundaries GEOJSON to map- Communities.geojson
  var communitiesLayer;
  var comLayers = [];
  
  $.ajax({
        url: "layer_data/Communities.geojson",
		beforeSend: function(xhr){
			if (xhr.overrideMimeType)
            {
				xhr.overrideMimeType("application/json");
            }
            },
			dataType: 'json',
			data: null,
			success:  function(data, textStatus, request) {
				communitiesLayer = L.geoJson(data, {
	  style: commStyle,
      onEachFeature: function (feature, layer) {
        layer.bindPopup('Community Name: '+ feature.properties.name);
		layer.bindTooltip(feature.properties.name,{permanent:true, direction:"center"});
		comLayers.push(layer);
	  }
    });
	
	// Add layer to the map control
    controlLayers.addOverlay(communitiesLayer, 'Communities');
  }}); 

// Add City Boundary GEOJSON to map- com_calgary_boundary.geojson
  var boundaryLayer;
  var boundaryLayers = [];
  
  $.ajax({
        url: "layer_data/com_calgary_boundary.geojson",
		beforeSend: function(xhr){
			if (xhr.overrideMimeType)
            {
				xhr.overrideMimeType("application/json");
            }
            },
			dataType: 'json',
			data: null,
			success:  function(data, textStatus, request) {
				boundaryLayer = L.geoJson(data, {
	  style: boundaryStyle,
      onEachFeature: function (feature, layer) {
        
		boundaryLayers.push(layer);
	  }
    }).addTo(map);
	
	
	// Add layer to the map control
    controlLayers.addOverlay(boundaryLayer, 'Calgary Boundary');
  }}); 
  
//PostGIS Layer Loading
  
// Create layer to hold query result
  var queryLayer;
   
  function postgisPointQuerySubmit() {
	  
	var longitude = document.getElementById("longitude").value;
	var latitude = document.getElementById("latitude").value;
	
	var lName = document.getElementById("layerName").value;
	
	// Calls the querySwitch function
	querySwitch(longitude, latitude, lName);
  }
  
// Get the tab with id="defaultMode" and click on it
	document.getElementById("defaultMode").click();
  
  
// Menu Popup Functions
  function menuIconFunction() {
	  
	  closeStat();
	  
	  var element = document.getElementById("menuIcon");
    element.classList.toggle("change");
	if (document.getElementById("mySidenav").style.width==0 || document.getElementById("mySidenav").style.width=="0px"){
		openNav();}
	else{
		closeNav();
		}
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
    document.getElementById("mySidenav").style.display = "block";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.display = "none";
  }
  
  // Statistics Popup Functions
  function menuStatsFunction() {
	if (document.getElementById("mySideStats").style.width==0 || document.getElementById("mySideStats").style.width=="0px"){
		openStat();}
	else{
		closeStat();
		
		}
  }
  function openStat() {
    document.getElementById("mySideStats").style.width = "350px";
    document.getElementById("mySideStats").style.display = "block";
  }
  function closeStat() {
    document.getElementById("mySideStats").style.width = "0px";
    document.getElementById("mySideStats").style.display = "none";
  }

// Control Map Layers Loaded from Geoserver
  function layerToggle(id) {
	/*if a parent group, disable other parent groups then display .dropdown-content child layers*/
	/*if a child in active group, turn other layers off then request new layer from server*/
	
	//document.getElementById("menuIcon").classList.toggle("change");
	//alert(id);
	//alert(document.getElementById(id).className);
	switch (document.getElementById(id).className) {
		case 'parent-layer':
		case 'parent-layer active':
			
			/*Clear active layers*/
			var links = document.querySelectorAll( 'a' );
				if(links !==null){
					for( var i=links.length; i--; ) {
					links[i].classList.remove("active");
					}
				}
			var links = document.querySelectorAll( 'div' );
				if(links !==null){
					for( var i=links.length; i--; ) {
					if(links[i].classList.contains("dropdown-content")){
						links[i].style.display="none";
					}
					}
				}
			/*Set parent and children to active*/
			document.getElementById(id).classList.add("active");
			
			
			var children = document.getElementById(id+'-child')/*.querySelectorAll('.child-layer')*/;
			//alert(children.id);
				children.style.display = "block";
				
			
		break;
		case 'child-layer':
			/*alert("Child");*/
			/*If not the same category, set it's parent and the child to active*/
			/*Clear active layers*/
			var links = document.querySelectorAll( 'a' );
				if(links !==null){
					for( var i=links.length; i--; ) {
					links[i].classList.remove("active");
					}
				}
				
			/*Set the child active*/
			document.getElementById(id).classList.add("active");
			
			/*Set parent category active*/
			var parent = document.getElementById(id).parentElement.parentElement.querySelector( 'a' );
			parent.classList.add("active");
			
			//geoserverRequest();
			postSwitch(id);
			map.invalidateSize(true);
			
		break;
		
	}
	
	
	// TODO: Open statistics panel, update on map move with appropriate info
	  
}



// Check search for illegal characters in geolocation
function validCharForAddress(s) { 
	//alert ("validchar");
	if(s.length>1){
	for(var i = 0; i < s.length; i++) {
        if("/!@$%^*(){}|[]\\".indexOf(s[i]) >= 0){
			
			document.getElementById("search").value = "Invalid location. Please try again";
			return false;
		}
    }
    return true;
	}
	else{
		document.getElementById("search").value = "Invalid location. Please try again";
	}
	
}

 //var target = document.getElementById('map');
  var opts={lines: 9, length: 16, width:17, radius:48, corners:0.6, animation:'spinner-line-fade-quick'};
  map.spin(true, opts);//var spinner = new Spinner(opts).spin(target);
  map.spin(false);

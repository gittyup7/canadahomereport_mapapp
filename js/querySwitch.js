function querySwitch(longitude, latitude, lName){
	alert("Switch");
switch (true) {
  case (lName==="business_gas_stations_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_GasStation.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				var bounds = L.latLngBounds([]);				
				bounds.extend(L.latLng([latitude, longitude]));
				var searchMarker = L.marker([latitude, longitude]).addTo(map);
				
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
												
						layer.bindPopup('Name: '+ feature.properties.tradename + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.licencetyp).openPopup();
					}
				}).addTo(map);
				
				var layerBounds = queryLayer.getBounds();
				bounds.extend(layerBounds);
				map.fitBounds(bounds);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="business_malls_markets_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_Malls.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.tradename + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.licencetyp).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="business_restaurants_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_Restaurants.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.tradename + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.licencetyp).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="com_services_libraries_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_Library.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;  
  case (lName==="com_services_com_centers_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_ComCenter.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="emergency_fire_stations_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_FireStations.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Community: ' + feature.properties.community).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="emergency_health_centers_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_HealthCenter.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="emergency_hospitals_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_HealthCenter.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="emergency_police_stations_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_PoliceStations.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="schools_elementary_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_ElemSchools.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address_ab + '<br> Type: ' + feature.properties.type + '<br> Elementary: ' + feature.properties.elem + '<br> Junior High: ' + feature.properties.junior_h + '<br> High: ' + feature.properties.senior_h).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="schools_jr_high_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_JrHighSchools.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address_ab + '<br> Type: ' + feature.properties.type + '<br> Elementary: ' + feature.properties.elem + '<br> Junior High: ' + feature.properties.junior_h + '<br> High: ' + feature.properties.senior_h).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="schools_high_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_HighSchools.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Address: ' + feature.properties.address_ab + '<br> Type: ' + feature.properties.type + '<br> Elementary: ' + feature.properties.elem + '<br> Junior High: ' + feature.properties.junior_h + '<br> High: ' + feature.properties.senior_h).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="schools_post_sec_point"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_PostSecondary.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Type: ' + feature.properties.type).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  case (lName==="other_cemeteries_polygon"):
    $.ajax({
		type: "POST",
        url: "php/Nearest_Point_To_GeoJSON_Cemeteries.php",
			data: {longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				jslayer = JSON.parse(response);
				queryLayer = L.geoJson(jslayer, {
					style: defaultPointStyle,
					onEachFeature: function (feature, layer) {
						layer.bindPopup('Name: '+ feature.properties.name + '<br> Steward: ' + feature.properties.steward).openPopup();
		
					}
				}).addTo(map);
			},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
    break;
  default:
    text = "Looking forward to the Weekend";
}
}
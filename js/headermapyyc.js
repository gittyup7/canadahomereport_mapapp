

var locationList;
var homeListLocations=[];
var statListLocations=[];

//Load and save user Locations
function loadDBLocations(){
	
	var homeList = document.getElementById("homeList");
	var statListTemp = document.getElementById("statList1");
	var statListTemp2 = document.getElementById("statList2");
	
	//alert("LDB:"+homeList.size);
	// Calls the PHP function
	var userID= document.getElementById("userIDInput").value;
	//alert(userID);
	 $.ajax({
		type: "POST",
        url: "php/base/LoadUserLocations.php",
			data: {user_ID: userID},
			success:  function(response) {
				console.log(response);
				var fromPHP = JSON.parse(response);
				
				
				//var homeList = document.getElementById("homeList");
				var tempSelect = document.getElementById("homeList");
				//alert(tempSelect.length);
				tempSelect.length=1;
				statListTemp.length=1;
				statListTemp2.length=1;
								
				for (i=0; i<fromPHP.length; i++) {
					
					//Add location to homeList
					var newOption = document.createElement("option");
					newOption.innerHTML = fromPHP[i].address;
					newOption.value = fromPHP[i].address;
	
					homeList.add(newOption);
					homeListLocations.push(new Location(false, fromPHP[i].address, fromPHP[i].community, fromPHP[i].latitude, fromPHP[i].longitude));
					
					//Add location to statList
					var newOption2 = document.createElement("option");
					newOption2.innerHTML = fromPHP[i].address;
					newOption2.value = fromPHP[i].address;
					statListTemp.add(newOption2);
					statListLocations.push(new Location(false, fromPHP[i].address, fromPHP[i].community, fromPHP[i].latitude, fromPHP[i].longitude));
					
					//Add location to statList
					var newOption2 = document.createElement("option");
					newOption2.innerHTML = fromPHP[i].address;
					newOption2.value = fromPHP[i].address;
					statListTemp2.add(newOption2);
					statListLocations.push(new Location(false, fromPHP[i].address, fromPHP[i].community, fromPHP[i].latitude, fromPHP[i].longitude));
			
			
			
			}},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 	
}


/*Takes the active location or map center and stores it in the homelist/database*/
function addLocationToList (){
	
	var latitude = activeLocation.latitude;
	var longitude = activeLocation.longitude;
	var community = activeLocation.community;
	var address = activeLocation.address;
	alert(address);
	
		
	//Verify that an active location is set
	if(address!='' && address!=null && activeLocation.active==true && communityMatch(community) && latitude>0 && longitude<0){
		//Add Location to database
		//alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	var locToWrite = new Location(true, address, community, latitude, longitude);
	
	//Add location to select
	var homeList = document.getElementById("homeList");
	//alert(homeList.size);
	var newOption = document.createElement("option");
	newOption.text = locToWrite.address;
	newOption.value = locToWrite.address;
	
	homeList.add(newOption);
	
	var userID= document.getElementById("userIDInput").value;

	
	//Add location to the database
	$.ajax({
		type: "POST",
        url: "php/base/saveUserLocations.php",
			data: {user_ID: userID, address: address, community: community, longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				console.log("Location added to DB"+ response);
				loadDBLocations();
				},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
	
	}
	else{
		//Give user the option to use current map cursor as their location
		var z = confirm("No location has been set. Use the current map cursor as your home's location?");
		if (z==true) {
		
	//Reverse geocodes an address
	if (address.trim()==='' || address==null){
		//alert("No address");
		//Use reverseGeocoder to find address
		var rgResult = reverseGeocode(map.getCenter().lat, map.getCenter().lng);
		latitude = map.getCenter().lat;
		longitude = map.getCenter().lng;
		
		alert(rgResult);
		var addressRG = locationSplitter(rgResult);
		
		//alert(addressRG[0]);
		address = addressRG[0];
		alert("Address: "+ address);
		//community = addressRG[1];;
		
	
	validCharForAddress(address);
	}
	
	//Check if Community is set
	if (community=== '' || community==null){
		//Use ST_Within in PostGIS to find community
		community = findCommunity(latitude, longitude);
		alert("Community: "+ community);
	}
	
	alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	var locToWrite = new Location(true, address, community, latitude, longitude);
	
	//Add location to select
	var homeList = document.getElementById("homeList");
	//alert(homeList.size);
	var newOption = document.createElement("option");
	newOption.text = locToWrite.address;
	newOption.value = locToWrite.address;
	
	homeList.add(newOption);
	
	var userID= document.getElementById("userIDInput").value;

	
	//Add location to the database
	$.ajax({
		type: "POST",
        url: "php/base/saveUserLocations.php",
			data: {user_ID:userID, address: address, community: community, longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				//alert("Location added to DB"+ response);
				loadDBLocations();
				},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 
	
	
	
}}}

/*function addLocationToList(locationToAdd){
	
	const n = Number(locationToAdd.latitude);
	if(Number.isNaN(n)){
		
	}
	else{
	var latitude = locationToAdd.latitude;
	}
	const m = Number(locationToAdd.longitude);
	if(Number.isNaN(m)){
		
	}
	else{
	var longitude = locationToAdd.longitude;
	}
	if(communityMatch(locationToAdd.community)){
	var community = locationToAdd.community;
	}
	else {
		
	}
	if(address!='' && address!=null){
	var address = locationToAdd.address;
	}
	else{
		
	}
	alert(address);
	
	//Add Location to database
	alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	var locToWrite = new Location(true, address, community, latitude, longitude);
	
	//Add location to select
	var homeList = document.getElementById("homeList");
	//alert(homeList.size);
	var newOption = document.createElement("option");
	newOption.text = locToWrite.address;
	newOption.value = locToWrite.address;
	
	homeList.add(newOption);
	
	var userID= document.getElementById("userIDInput").value;

	
	//Add location to the database
	$.ajax({
		type: "POST",
        url: "php/base/saveUserLocations.php",
			data: {user_ID: userID, address: address, community: community, longitude: longitude, latitude: latitude},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				alert("Location added to DB"+ response);
				loadDBLocations();
				},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
			}
	}); 	
	}*/
	

function removeLocationfromList(){
	var homeList = document.getElementById("homeList");
	
	var locToRemove = homeList.options[homeList.selectedIndex].text;
	alert(locToRemove);
	
	var userID= document.getElementById("userIDInput").value;
	
	if(locToRemove!='Saved Locations'){
		
		var address = locToRemove;
		
		//Set location inactive in DB (User, Address, Removed)
		$.ajax({
		type: "POST",
        url: "php/base/removeUserLocations.php",
			data: {user_ID: userID, address: address},
			success:  function(response) {
				if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				alert("Location removed from DB");
				//Remove location from homeList
				homeList.remove(homeList.selectedIndex);
				homeList.selectedIndex= 0;
				loadDBLocations();
				return;
				},
			error: function(xhr, status, error){
				alert("ERROR:" +error);
				return;
			}
		}); 
		
	}
}

//Called from homeList (full Location object) or geocoder (full Location object)
function updateLocation(upLocation){
	
	//alert(upLocation.address +' '+upLocation.community)
	
	if(upLocation.address!='' && validCharForAddress(upLocation.address)){		
		var tempAddress = upLocation.address;
	}
	else{
		console.log("Address invalid.");
		alert("Address invalid.");
		return "Address invalid";
	}
	
	if(upLocation.community.trim()!='' && upLocation.community!=null && communityMatch(upLocation.community.trim())){		
			
			var tempCommunity = upLocation.community.trim();
		
	}
	else{
		console.log("Community invalid.");
		alert("Community invalid.");
		return "Community invalid";
	}
	
	//Show the Divs
	 var divsToShow = document.getElementsByClassName("locationDivLink"); 
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "inline-block"; 
    }
	
	upLocation.setInactive;
	
	document.getElementById("addressLDL").innerHTML= tempAddress;
	
	document.getElementById("communityLDL").innerHTML= tempCommunity;
	
	document.getElementById("cityLDL").innerHTML="Calgary, AB";
	
	activeLocation= new Location(true, tempAddress,tempCommunity, upLocation.latitude, upLocation.longitude);
	
	if(searchMarker!=null){
		  map.removeLayer(searchMarker);
	  }
	
	activeLocation.zoomTo();
	map.invalidateSize(true);
	
	return "Update successful";
} 


/*Loads selected location object and calls it's zoomTo method*/
function homeListFunction(){
	
	activeLocation.setInactive;
	removeActiveLocation();
	//Loop through an array of saved locations and find the one that matches location.address 
	//from the homeList
	var selected = document.getElementById('homeList').value;
	
	//alert(selected);
	
		//alert(homeListLocations[1].address);
//TODO
    for(var i = 0; i < homeListLocations.length; ++i){
		//alert(homeListLocations[i].address);
		if(selected==homeListLocations[i].address){
            //alert(homeListLocations[i].address);
			
			//Call the location's zoomTo and update the activeLocation and fields
			updateLocation(homeListLocations[i]);
			//activeLocation.zoomTo;
			
			break;
		}
	}
}

/*Loads selected location object and analyzes proximity*/
function statListFunction(list){
	var listStr = list.toString();
    
	var statListTemp = document.getElementById("statList".concat(listStr));
	//alert(statlistTemp);	
	
	var selected = document.getElementById("statList".concat(listStr)).value;
	//alert(selected);
	if(selected!= "Saved Locations"){
		
	//Loop through an array of saved locations and find the one that matches location.address 
	//from the statList
	//alert(statListLocations.length);
    for(var i = 0; i < statListLocations.length; ++i){
		//alert(statListLocations[i].address);
		if(selected==statListLocations[i].address){
			
			//Call the nearest stats function
			if(list==1){
			setActiveLocationTable1(statListLocations[i]);
			nearestStats1(statListLocations[i].latitude, statListLocations[i].longitude);		
			
			var activeTemp= document.getElementById("activeStatDiv".concat(listStr));
			activeTemp.style.display = "block";
		
			var nearestTemp= document.getElementById("nearestStatDiv".concat(listStr));
			nearestTemp.style.display = "block";
			
			break;
			}
			
			if(list==2){
			setActiveLocationTable2(statListLocations[i]);
			nearestStats2(statListLocations[i].latitude, statListLocations[i].longitude);		
			
			var activeTemp= document.getElementById("activeStatDiv".concat(listStr));
			activeTemp.style.display = "block";
		
			var nearestTemp= document.getElementById("nearestStatDiv".concat(listStr));
			nearestTemp.style.display = "block";
			
			break;
			}			
			
		}
	}
	}
	else{
		alert("Please select a location");
	}
}


function removeActiveLocation(){
	var text = "Active Location cleared";
	activeLocation.setInactive;
	
	activeLocation= new Location(false,"","",0,0);
	
	 var divsToHide = document.getElementsByClassName("locationDivLink"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; 
    }
	
	document.getElementById("addressLDL").innerHTML="";
	
	document.getElementById("communityLDL").innerHTML="";
	
	document.getElementById("cityLDL").innerHTML="";
	
	if(searchMarker!=null){
		  map.removeLayer(searchMarker);
	}
	
	map.invalidateSize(true);
	
	return text;	
}

function resetSearchInput(){
	var searchText = document.getElementById("search").value;
	searchText= '';
}

function addActiveLocation(addressAAL, commAAL, cityAAL){
	var text = "Active Location added";
	
	activeLocation= new Location(false, addressAAL, commAAL,0,0);
	
	 var divsToShow = document.getElementsByClassName("locationDivLink"); 
    for(var i = 0; i < divsToShow.length; i++){
        divsToShow[i].style.display = "inline-block"; 
    }
	
	document.getElementById("addressLDL").innerHTML= addressAAL;
	document.getElementById("addressLDL").style.display="inline-block";
	
	document.getElementById("communityLDL").innerHTML= commAAL;
	document.getElementById("communityLDL").style.display="inline-block";
	
	document.getElementById("cityLDL").innerHTML= cityAAL;
	document.getElementById("cityLDL").style.display="inline-block";
	map.invalidateSize(true);
	
	return text;	
}
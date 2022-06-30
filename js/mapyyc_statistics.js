//Define tables for active location, active community, nearest features, 
// and multiple communities (for no active location)
var activeData;
var activeCommunityData;
var multipleCommunitiesData;

var activeTable;
var activeCommunityTable;
var multipleCommunitiesTable;

	

//setStat2ColumnWidth("locationStat1");

function setStat2ColumnWidth(tmpLoc){
	alert(document.getElementById("statistics").offsetWidth);
	var fullwidth = document.getElementById("statistics").offsetWidth-32;
	var twos = fullwidth/2;
	//var threes = fullwidth/3;
	document.getElementById(tmpLoc).style.width = twos.toString().concat("px");
	
	document.getElementById(tmpLoc).style.maxWidth = twos.toString().concat("px");
	
}

function openStatLocationTab(evt, locationNum) {

	
  var i, statTabcontent, statTablinks;
  statTabcontent = document.getElementsByClassName("statTabcontent");
  for (i = 0; i < statTabcontent.length; i++) {
    statTabcontent[i].style.display = "none";
  }
  statTablinks = document.getElementsByClassName("statTablinks");
  for (i = 0; i < statTablinks.length; i++) {
    statTablinks[i].className = statTablinks[i].className.replace(" active", "");
  }
  document.getElementById(locationNum).style.display = "block";
  evt.currentTarget.className += " active";
}

function showLocOrComm1(radioChoice){
	var comm1 = document.getElementById("commList1");
	comm1.style.display = "none";
	var loc1 = document.getElementById("statList1");
	loc1.style.display = "none";
		
	if(radioChoice==="loc1"){
		loc1.style.display = "block";
		comm1.style.display = "none";
	}
	else{
		if(radioChoice==="comm1"){
		comm1.style.display = "block";
		loc1.style.display = "none";
		}
	}
	
}

function showLocOrComm2(radioChoice){
	
	var comm2 = document.getElementById("commList2");
	comm2.style.display = "none";
	var loc2 = document.getElementById("statList2");
	loc2.style.display = "none";
		
	if(radioChoice==="loc2"){
		loc2.style.display = "block";
		comm2.style.display = "none";
	}
	else{
		if(radioChoice==="comm2"){
		comm2.style.display = "block";
		loc2.style.display = "none";
		}
	}
	
}


function setActiveLocationTable1(location){
	
	//alert("setActiveLocationTable");
	activeData= null;
	activeTable= null;
	activeCommunityData= null;
	activeCommunityTable= null;
	
	//if active location set
	if(location.address.trim()!=''){
	//address, community, latitude, longitude
	var latitude = location.latitude;
	var longitude = location.longitude;
	var community = location.community;
	var address = location.address;
	//alert(address);
	
	if (address.trim()==='' || address==null){
		//alert("No address");
		//Use reverseGeocoder to find address
		var rgResult = reverseGeocode(latitude, longitude);
		
		//alert(rgResult);
		address = rgResult.lat;
		//alert("Address: "+ address);
		community = rgResult.properties.neighbourhood;
		//alert("Community: "+ community);
	}
	validCharForAddress(address);
	
	if (community=== '' || community==null){
		//Use ST_Within in PostGIS to find community
		//alert("No Community");
		community = findCommunity(latitude, longitude);
		//alert("Community: "+ community);
	}
	
	//alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	//Load activeData array
	activeData = [
	{addressCol:address, communityCol:community, latitudeCol:latitude, longitudeCol:longitude}];
	
	//Load activeTable with activeData
	activeTable = new Tabulator("#activeStatDivTable1", {
 	height:"49px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	responsiveLayout:true, // enable responsive layouts
	data:activeData, //assign data to table
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Address", field:"addressCol", sorter:"string"},
	 	{title:"Community", field:"communityCol", sorter:"string"}	 	
 	]	
	});
	
	//Redraw table
	activeTable.redraw();
	
	getCommunityDataAnalysis(community, 1);
	
	
	
	//Load nearest table data
	nearestStats1(latitude, longitude);
	
	}
	
	
		
		
}

function setActiveLocationTable2(location){
	
	//alert("setActiveLocationTable");
	activeData= null;
	activeTable= null;
	
	//if active location set
	if(location.address.trim()!=''){
	//address, community, latitude, longitude
	var latitude = location.latitude;
	var longitude = location.longitude;
	var community = location.community;
	var address = location.address;
	//alert(address);
	
	if (address.trim()==='' || address==null){
		alert("No address");
		//Use reverseGeocoder to find address
		var rgResult = reverseGeocode(latitude, longitude);
		
		//alert(rgResult);
		address = rgResult.lat;
		alert("Address: "+ address);
		community = rgResult.properties.neighbourhood;
		alert("Community: "+ community);
	}
	validCharForAddress(address);
	
	if (community=== '' || community==null){
		//Use ST_Within in PostGIS to find community
		alert("No Community");
		community = findCommunity(latitude, longitude);
		alert("Community: "+ community);
	}
	
	alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	//Load activeData array
	activeData = [
	{addressCol:address, communityCol:community, latitudeCol:latitude, longitudeCol:longitude}];
	
	//Load activeTable with activeData
	activeTable = new Tabulator("#activeStatDivTable2", {
 	height:"49px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	responsiveLayout:true, // enable responsive layouts
	data:activeData, //assign data to table
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Address", field:"addressCol", sorter:"string"},
	 	{title:"Community", field:"communityCol", sorter:"string"},
	 	/*{title:"Latitude", field:"latitudeCol", sorter:"number"},
	 	{title:"Longitude", field:"longitudeCol", sorter:"number"},*/
 	]/*,
 	rowClick:function(e, row){ //trigger an alert message when the row is clicked
 		alert("Row " + row.getData().id + " Clicked!!!!");
 	}*/
	
	});
	
	//Redraw table
	activeTable.redraw();
	
	
	getCommunityDataAnalysis(community, 2);
	
	//Load nearest table data
	nearestStats2(latitude, longitude);
	
	}
	
	
		
		
}

function setActiveLocationTable3(location){
	
	//alert("setActiveLocationTable");
	activeData= null;
	activeTable= null;
	
	//if active location set
	if(location.address.trim()!=''){
	//address, community, latitude, longitude
	var latitude = location.latitude;
	var longitude = location.longitude;
	var community = location.community;
	var address = location.address;
	//alert(address);
	
	if (address.trim()==='' || address==null){
		alert("No address");
		//Use reverseGeocoder to find address
		var rgResult = reverseGeocode(latitude, longitude);
		
		//alert(rgResult);
		address = rgResult.lat;
		alert("Address: "+ address);
		community = rgResult.properties.neighbourhood;
		alert("Community: "+ community);
	}
	validCharForAddress(address);
	
	if (community=== '' || community==null){
		//Use ST_Within in PostGIS to find community
		alert("No Community");
		community = findCommunity(latitude, longitude);
		alert("Community: "+ community);
	}
	
	alert(address +' '+ community+ ' ' + latitude + ' ' + longitude);
	//Load activeData array
	activeData = [
	{addressCol:address, communityCol:community, latitudeCol:latitude, longitudeCol:longitude}];
	
	//Load activeTable with activeData
	activeTable = new Tabulator("#activeStatDivTable3", {
 	height:"49px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	responsiveLayout:true, // enable responsive layouts
	data:activeData, //assign data to table
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Address", field:"addressCol", sorter:"string"},
	 	{title:"Community", field:"communityCol", sorter:"string"},
	 	/*{title:"Latitude", field:"latitudeCol", sorter:"number"},
	 	{title:"Longitude", field:"longitudeCol", sorter:"number"},*/
 	]/*,
 	rowClick:function(e, row){ //trigger an alert message when the row is clicked
 		alert("Row " + row.getData().id + " Clicked!!!!");
 	}*/
	
	});
	
	//Redraw table
	activeTable.redraw();
	
	
	getCommunityDataAnalysis(community, 3);
	
	//Load nearest table data
	nearestStats3(latitude, longitude);
	
	}
	
	
		
		
}
function setCommLocationTable(){
	alert("Multiple Communities");
	multipleCommunitiesData = null;
	multipleCommunitiesTable = null;
}

function newLocationAnalysis(){
	//Check if Location 2 is visible
	var loc2display = document.getElementById("locationStat2");
	var loc2Style = loc2display.currentStyle || window.getComputedStyle(loc2display);
	//alert(loc2Style.display);
	var loc3display = document.getElementById("locationStat3");	
	var loc3Style = loc3display.currentStyle || window.getComputedStyle(loc3display);
	//alert(loc3Style.display);
	
	//If not, add Location 2 and break
	if(loc2Style.display!="block"){
		setStat2ColumnWidth("locationStat1");
		setStat2ColumnWidth("locationStat2");
		
		document.getElementById("locationStat2").style.display = "block";
		var statTemp= document.getElementById("statList2");
		statTemp.style.display = "block";
		
	}
	//Check if Location 3 is visible
	else if (loc3Style.display=="none"){	
	//If not, add Location 3 and break
		document.getElementById("locationStat3").style.display = "block";
		var statTemp= document.getElementById("statList3");
		statTemp.style.display = "block";
		
		setStat3ColumnWidth("locationStat1");
		setStat3ColumnWidth("locationStat2");
		setStat3ColumnWidth("locationStat3");
		
		
	}
	else{
	//If visible, give message that no more locations can be added
	alert("Only 3 locations can be analyzed simultaneously."); 
	}
	
}
function getCommunityDataAnalysis(activeCommunity, number){
	$.ajax({
		type: "POST",
		url: "./php/community/community_statistics.php",
		data: {communityAJAX: activeCommunity.toUpperCase()},
		success: function(response) {
		if(map.hasLayer(queryLayer)){
			map.removeLayer(queryLayer);
		}
		var fromPHP = JSON.parse(response);
		console.log(fromPHP[0].house_price);
		
		//activeCommunity Data load
		var activeCommunityDataTop = [{housepriceCol:fromPHP[0].house_price, price_rankCol:fromPHP[0].price_rank, crimeCol:fromPHP[0].crime}];
		var activeCommunityDataMiddle = [{housepriceCol:fromPHP[0].crime_rank, price_rankCol:fromPHP[0].household_income, crimeCol:fromPHP[0].individual_income}];
		var activeCommunityDataBottom = [{housepriceCol:fromPHP[0].over_65_pop, price_rankCol:fromPHP[0].under_19_pop, crimeCol:fromPHP[0].immigration}];
		
		//Load activeCommunityTable with activeCommunityData
		var activeCommunityTableTop = new Tabulator("#commStatDivTableTop"+number, {
		height:"50px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
		responsiveLayout:true, // enable responsive layouts
		data:activeCommunityDataTop, //assign data to table
		layout:"fitColumns", //fit columns to width of table (optional)
		columns:[ //Define Table Columns
			{title:"Avg House Price", field:"housepriceCol", sorter:"number"},
			{title:"Price Ranking (High-to-Low)", field:"price_rankCol", sorter:"number"},
			{title:"# of Crimes", field:"crimeCol", sorter:"number"},
		]	
		});
		
			//Load activeCommunityTable with activeCommunityData
		var activeCommunityTableMiddle = new Tabulator("#commStatDivTableMiddle"+number, {
		height:"50px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
		responsiveLayout:true, // enable responsive layouts
		data:activeCommunityDataMiddle, //assign data to table
		layout:"fitColumns", //fit columns to width of table (optional)
		columns:[ //Define Table Columns
			{title:"Crime Rank (Low-to-High)", field:"housepriceCol", sorter:"number"},
			{title:"Household Income", field:"price_rankCol", sorter:"number"},
			{title:"Individual Income", field:"crimeCol", sorter:"number"},
		]	
		});
		
			//Load activeCommunityTable with activeCommunityData
		var activeCommunityTableBottom = new Tabulator("#commStatDivTableBottom"+number, {
		height:"50px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
		responsiveLayout:true, // enable responsive layouts
		data:activeCommunityDataBottom, //assign data to table
		layout:"fitColumns", //fit columns to width of table (optional)
		columns:[ //Define Table Columns
			{title:"Over 65 %", field:"housepriceCol", sorter:"number"},
			{title:"Under 19 %", field:"price_rankCol", sorter:"number"},
			{title:"Immigration %", field:"crimeCol", sorter:"number"},
		]	
		});
		
		//Redraw table
		activeCommunityTableTop.redraw();
		activeCommunityTableMiddle.redraw();
		activeCommunityTableBottom.redraw();
		},
		error: function(xhr, status, error){
		alert("ERROR:" +error);
		}
	});
}

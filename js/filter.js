var currentTab = 0;

/*Community match style*/
function matchStyle(feature) {
    return {
        fillColor: '#FDE92C',
        weight: 2,
        opacity: 1,
        color: '#FDE92C',
        fillOpacity: 0.8
    };
}

function showFilter() {
	var status = document.getElementById("overlay").style.display;	
		currentTab = 0;
		//alert(status);
	if (status == "none"){
		document.getElementById("overlay").style.display = "block";
		showFilterForm(0); // Display the current tab
	}
	else
		document.getElementById("overlay").style.display = "none";
}


function checkFilterCheckbox(id) {
	if(document.getElementById(id).value === "false"){
		document.getElementById(id).checked = true;
		document.getElementById(id).value = "true";
	}
	else if (document.getElementById(id).value === "true"){
		//alert("true");
		document.getElementById(id).checked = false;
		document.getElementById(id).value = "false";
	}

}
function showFilterForm(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("filterTab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Apply Filter";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("filterTab");
  
	  // Hide the current tab:
	  x[currentTab].style.display = "none";
	  // Increase or decrease the current tab by 1:
	  currentTab = currentTab + n;
	  // if you have reached the end of the form... :
	  if (currentTab >= x.length) {
		//...the form gets submitted:
		filterFormSubmit();
		/*return false;*/
	  }
	  // Otherwise, display the correct tab:
	  showFilterForm(currentTab);
	}
/*select = x[currentTab].getElementsByTagName('select'); 
if (select[i].value) {
  // value is set to a valid option, so submit form
  return true;
}
return false;*/

/*function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("filterTab");
  //y = x[currentTab].getElementsByTagName("input");
  y = x[currentTab].getElementsByTagName('select');
  // A loop that checks every input field in the current tab:
  /*for (i = 0; i < y.length; i++) {
    // If a field is empty...
	//alert(i);
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}*/

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function filterFormSubmit(){
	
	var fireServices, policeServices, hospitalServices, crimeRate='';
	
	if(document.getElementById("fireServices").value===''){}	
	else {
		fireServices = document.getElementById("fireServices").value;
	}
	if(document.getElementById("policeServices").value===''){}	
	else {
		policeServices = document.getElementById("policeServices").value;
	}
	if(document.getElementById("hospitalServices").value===''){}	
	else {
		hospitalServices = document.getElementById("hospitalServices").value;
	}
	if(document.getElementById("crimeRate").value===''){}	
	else {
		crimeRate = document.getElementById("crimeRate").value;
	}
	
	var noiseSource, smellSource, industrialSource='';
	if(document.getElementById("noiseSource").value===''){}	
	else {	
		noiseSource = document.getElementById("noiseSource").value;
	}
	if(document.getElementById("smellSource").value===''){}	
	else {
		smellSource = document.getElementById("smellSource").value;
	}
	if(document.getElementById("industrialSource").value===''){}	
	else {
		industrialSource = document.getElementById("industrialSource").value;
	}
	
	var schoolFilter, busTransitFilter, lrtTransitFilter, libraryFilter='';
	
	if(document.getElementById("schoolFilter").value===''){}	
	else {
		schoolFilter = document.getElementById("schoolFilter").value;
	}
	if(document.getElementById("busTransitFilter").value===''){}	
	else {
		busTransitFilter = document.getElementById("busTransitFilter").value;
	}
	if(document.getElementById("lrtTransitFilter").value===''){}	
	else {
		lrtTransitFilter = document.getElementById("lrtTransitFilter").value;
	}
	if(document.getElementById("libraryFilter").value===''){}	
	else {
		libraryFilter = document.getElementById("libraryFilter").checked;
	}
	
	var pParkFilter, majParkFilter, dogParkFilter, playgroundFilter, pathFilter, baseballFilter,
		basketballFilter, cricketFilter, footballFilter, frisbeeFilter, hockeyFilter, skateboardFilter, sledFilter, soccerFilter,
		tennisFilter, trackFilter, volleyballFilter;
		
	
	if(document.getElementById("majParkFilter").value === "true"){
		majParkFilter = document.getElementById("majParkFilter").value;
	}	
	else {
		majParkFilter = "false";
	}
	
	if(document.getElementById("playgroundFilter").value === "true"){
		playgroundFilter = document.getElementById("playgroundFilter").value;
	}	
	else {
		playgroundFilter = "false";
	}
	
	if(document.getElementById("dogParkFilter").value === "true"){	
		dogParkFilter = document.getElementById("dogParkFilter").value;
	}	
	else {
		dogParkFilter = "false";
	}
	//pathFilter
	if(document.getElementById("pathFilter").value === "true"){
		pathFilter = document.getElementById("pathFilter").value;
	}	
	else {
		pathFilter = "false";
	}
	
	//baseballFilter
	if(document.getElementById("baseballFilter").value === "true"){
		baseballFilter = document.getElementById("baseballFilter").value;
	}	
	else {
		baseballFilter = "false";
	}
	
	//basketballFilter
	if(document.getElementById("basketballFilter").value === "true"){
		basketballFilter = document.getElementById("basketballFilter").value;
	}	
	else {
		basketballFilter = "false";
	}
	
	//cricketFilter
	if(document.getElementById("cricketFilter").value === "true"){
		cricketFilter = document.getElementById("cricketFilter").value;
	}	
	else {
		cricketFilter = "false";
	}
	
	//footballFilter
	if(document.getElementById("footballFilter").value === "true"){
		footballFilter = document.getElementById("footballFilter").value;
	}	
	else {
		footballFilter = "false";
	}
	
	//frisbeeFilter
	if(document.getElementById("frisbeeFilter").value === "true"){
		frisbeeFilter = document.getElementById("frisbeeFilter").value;
	}	
	else {
		frisbeeFilter = "false";
	}
	
	//hockeyFilter
	if(document.getElementById("hockeyFilter").value === "true"){
		hockeyFilter = document.getElementById("hockeyFilter").value;
	}	
	else {
		hockeyFilter = "false";
	}
	
	//skateboardFilter
	if(document.getElementById("skateboardFilter").value === "true"){
		skateboardFilter = document.getElementById("skateboardFilter").value;
	}	
	else {
		skateboardFilter = "false";
	}
	
	//sledFilter
	if(document.getElementById("sledFilter").value === "true"){
		sledFilter = document.getElementById("sledFilter").value;
	}	
	else {
		sledFilter = "false";
	}
	
	//soccerFilter
	if(document.getElementById("soccerFilter").value === "true"){
		soccerFilter = document.getElementById("soccerFilter").value;
	}	
	else {
		soccerFilter = "false";
	}
	
	//tennisFilter
	if(document.getElementById("tennisFilter").value === "true"){
		tennisFilter = document.getElementById("tennisFilter").value;
	}	
	else {
		tennisFilter = "false";
	}
	
	//trackFilter
	if(document.getElementById("trackFilter").value === "true"){
		trackFilter = document.getElementById("trackFilter").value;
	}	
	else {
		trackFilter = "false";
	}
	//volleyballFilter
	if(document.getElementById("volleyballFilter").value === "true"){
		volleyballFilter = document.getElementById("volleyballFilter").value;
	}	
	else {
		volleyballFilter = "false";
	}
	
	
	var youngFilter, seniorFilter, ethnicFilter='';
	
	if(document.getElementById("youngFilter").value===''){}	
	else {	
		youngFilter = document.getElementById("youngFilter").value;
	}
	if(document.getElementById("seniorFilter").value===''){}	
	else {
		seniorFilter = document.getElementById("seniorFilter").value;
	}
	/*if(document.getElementById("ethnicFilter").value===''){}	
	else {
		ethnicFilter = document.getElementById("ethnicFilter").value;
	}*/
	
	//Show clear filter button
	document.getElementById("clearFilterButton").disabled = false;
	//Hide all tabs
	var i, x = document.getElementsByClassName("filterTab");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
	
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'fireServices1=' + fireServices + '&policeServices1=' + policeServices + '&hospitalServices1=' + hospitalServices + 
		'&crimeRate1=' + crimeRate + '&noiseSource1=' + noiseSource + '&smellSource1=' + smellSource +
		'&industrialSource1=' + industrialSource + '&schoolFilter1=' + schoolFilter +
		'&busTransitFilter1=' + busTransitFilter + '&lrtTransitFilter1=' + lrtTransitFilter +
		'&libraryFilter1=' + libraryFilter +/* '&pParkFilter1=' + pParkFilter +*/ '&majParkFilter1=' + majParkFilter +
		'&dogParkFilter1=' + dogParkFilter + '&playgroundFilter1=' + playgroundFilter +
		'&pathFilter1=' + pathFilter + '&baseballFilter1=' + baseballFilter + '&basketballFilter1=' + basketballFilter + '&cricketFilter1=' + cricketFilter +
		'&footballFilter1=' + footballFilter + '&frisbeeFilter1=' + frisbeeFilter + '&hockeyFilter1=' + hockeyFilter +
		'&skateboardFilter1=' + skateboardFilter + '&sledFilter1=' + sledFilter +
		'&soccerFilter1=' + soccerFilter + '&tennisFilter1=' + tennisFilter +
		'&trackFilter1=' + trackFilter + '&volleyballFilter1=' + volleyballFilter +
		'&youngFilter1=' + youngFilter + '&seniorFilter1=' + seniorFilter /*+
		'&ethnicFilter1=' + ethnicFilter*/;
	
	map.spin(true);
	
	// AJAX code to submit form.
	$.ajax({
		type: "POST",
		url: "php/filter/communityFilter.php",
		data: dataString,
		cache: false,
		success: function(response) {
			console.log(response);
			if(map.hasLayer(queryLayer)){					
					map.removeLayer(queryLayer);
				}
				
				removeLegends();
				map.addControl(htmlLegendFilterMatch); 
				
				//console.log(response);	
				addRemoveLayertoLegend();
				
				try {
					jslayer = JSON.parse(response);
					 }
				catch(e) {
					alert(e); // error in the above string (in this case, yes)!
				}
				queryLayer = L.geoJson(jslayer, {
					style: matchStyle,
					 
					onEachFeature: function (feature, layer) {
						//geom, name, type

												
						layer.bindPopup('FILTER MATCH <br/> Community: '+ feature.properties.name + '<br> Class: ' + feature.properties.class).openPopup();
					}
				}).addTo(map);
				
				var layerBounds = queryLayer.getBounds();
				var bounds = map.getBounds();
				bounds.extend(layerBounds);
				map.flyToBounds(bounds);
				
		}
		});
		map.spin(false);
		showFilter();
		
	}

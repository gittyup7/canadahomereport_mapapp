var legendsArray=[];

var htmlLegendPolice= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Police Station', 
				html: '<i class="divIcon fas fa-shield-alt policeBlue awesome-legend untilt"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendPolice);
 
var htmlLegendFire= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Fire Station', 
				html: '<i class="divIcon fab orange fa-gripfire untilt awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendFire);

var htmlLegendPrison= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Correctional Facility', 
				html: '<i class="divIcon fas white fa-exclamation-circle untilt awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendPrison);

var htmlLegendHospital= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Hospital', 
				html: '<i class="divIcon fas fa-hospital-symbol untilt red awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendHospital);
	 
var htmlLegendHealthCenter= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Health Center', 
				html: '<i class="divIcon fas fa-clinic-medical untilt red awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendHealthCenter);
	 
var htmlLegendElemSchool= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Elementary School', 
				html: '<i class="divIcon elem fas fa-school awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendElemSchool);

var htmlLegendJrHighSchool= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Junior High School', 
				html: '<i class="divIcon jrhigh fas fa-school awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendJrHighSchool);

var htmlLegendHighSchool= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Senior High School', 
				html: '<i class="divIcon high fas fa-school awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendHighSchool);

var htmlLegendPostSecSchool= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Post-Secondary School', 
				html: '<i class="divIcon fas fa-graduation-cap untilt postSecColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendPostSecSchool);

var htmlLegendBusStop= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Bus Stop', 
				html: '<i class="divIcon fas fa-bus untilt awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendBusStop);

var htmlLegendLRTStop= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'LRT Station', 
				html: '<i class="divIcon fas fa-subway untilt lrtColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendLRTStop);

var htmlLegendLibrary= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Library', 
				html: '<i class="divIcon fas fa-book-reader untilt libraryColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendLibrary);

var htmlLegendAttraction= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Attraction', 
				html: '<i class="divIcon fas fa-landmark attractionColor untilt awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendAttraction);

var htmlLegendCommunityCenter= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Community Center', 
				html: '<i class="divIcon fas fa-users awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendCommunityCenter);

var htmlLegendWaterFacility= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Water Recreational Facility', 
				html: '<i class="divIcon fas fa-swimmer untilt swimPurple awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendWaterFacility);

var htmlLegendShoppingMall= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Shopping Mall', 
				html: '<i class="divIcon fas fa-shopping-bag shoppingColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendShoppingMall);

var htmlLegendGroceryStore= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Grocery Store', 
				html: '<i class="divIcon fas fa-carrot awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendGroceryStore);

var htmlLegendRestaurant= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Restaurant', 
				html: '<i class="divIcon fas fa-utensils restaurantColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendRestaurant);

var htmlLegendGasStation= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Gas Station', 
				html: '<i class="divIcon fas fa-gas-pump gasStationColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendGasStation);

var htmlLegendPlayStructure= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Play Structure', 
				html: '<i class="divIcon fas fa-child playStructureColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendPlayStructure);

var htmlLegendSportsFields= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Baseball Field', 
				html: '<i class="divIcon fas fa-baseball-ball baseColor awesome-legend"></i>'
		}]},{elements: [{
				label: 'Basketball Court', 
				html: '<i class="divIcon fas fa-basketball-ball basketBrown awesome-legend"></i>'
		}]},{elements: [{
				label: 'Football Field', 
				html: '<i class="divIcon fas fa-football-ball red awesome-legend"></i>'
		}]},{elements: [{
				label: 'Frisbee Golf', 
				html: '<i class="divIcon fas fa-compact-disc frisbeeColor awesome-legend"></i>'
		}]},{elements: [{
				label: 'Hockey Rink', 
				html: '<i class="divIcon fas fa-hockey-puck awesome-legend"></i>'
		}]},{elements: [{
				label: 'Ice Rink', 
				html: '<i class="divIcon fas fa-skating skatingColor awesome-legend"></i>'
		}]},{elements: [{
				label: 'Skateboard Park', 
				html: '<i class="divIcon fas fa-ban black awesome-legend"></i>'
		}]},{elements: [{
				label: 'Sled Hill', 
				html: '<i class="divIcon fas fa-sleigh sledPink awesome-legend"></i>'
		}]},{elements: [{
				label: 'Soccer Field', 
				html: '<i class="divIcon fas fa-futbol awesome-legend"></i>'
		}]}, {elements: [{
				label: 'Soccer / Football Field', 
				html: '<i class="divIcon fas letters socFootColor awesome-legend">S/F</i>'
		}]},{elements: [{
				label: 'Tennis Court', 
				html: '<i class="divIcon fab fa-affiliatetheme tennisGreen awesome-legend"></i>'
		}]},{elements: [{
				label: 'Track & Field', 
				html: '<i class="divIcon fas fa-running runningColor awesome-legend"></i>'
		}]},{elements: [{
				label: 'Volleyball Court', 
				html: '<i class="divIcon fas fa-volleyball-ball volleyballColor awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendSportsFields);
	 
/*var htmlLegendSwimming= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Swimming Pool', 
				html: '<i class="divIcon fas fa-swimmer untilt awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendSwimming);
	 map.addControl(htmlLegendSwimming); */
var htmlLegendHomeFS= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Homes For Sale', 
				html: '<i class="divIcon fas fa-home homeBrown awesome-legend"></i>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendHomeFS);

var htmlLegendAvgHouse= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Average House Price (Low-to-High)', 
				html: '<div id=""><div id="avg1"></div><div id="avg2"></div><div id="avg3"></div><div id="avg4"></div><div id="avg5"></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendAvgHouse);

var htmlLegendLandfills= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Landfill', 
				html: '<div id="htmlLegendLandfills"></div>',
				style: {
					'display': 'inline-block',
                    'background-color': '#00d400',
					'border': '2px #e8e8e8',
                    'width': '20px',
                    'height': '15px'
                }
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendLandfills);

var htmlLegendCemetery= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Cemetery', 
				html: '<div id="htmlLegendCemetery"></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendCemetery);

var htmlLegendSewage= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Water Treatment Lagoon', 
				html: '<div id="htmlLegendSewage"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendSewage);

var htmlLegendFlood= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Water Treatment Lagoon', 
				html: '<div id="htmlLegendFlood"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendFlood);

var htmlLegendProvPark= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Provincial Park', 
				html: '<div id="htmlLegendProvPark"></div>',
				style: {
					'display': 'inline-block',
                    'background-color': '#7aff70',
					'border': '1px #000',
                    'width': '20px',
                    'height': '15px'
                }
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendProvPark);

var htmlLegendDogPark= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Dog Park', 
				html: '<div id="htmlLegendDogPark"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendDogPark);

var htmlLegendOverallCrime= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Overall Crime Rate (Low-to-High)', 
				html: '<div id=""><div id="crime1"></div><div id="crime2"></div><div id="crime3"></div><div id="crime4"></div><div id="crime5"></div><div id=""></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendOverallCrime);

var htmlLegendPropertyCrime= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Property Crime Rate (Low-to-High)', 
				html: '<div id=""><div id="crime1"></div><div id="crime2"></div><div id="crime3"></div><div id="crime4"></div><div id="crime5"></div><div id=""></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendPropertyCrime);

var htmlLegendViolentCrime= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Violent Crime Rate (Low-to-High)', 
				html: '<div id=""><div id="crime1"></div><div id="crime2"></div><div id="crime3"></div><div id="crime4"></div><div id="crime5"></div><div id=""></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendViolentCrime);

var htmlLegendRailways= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Railroads', 
				html: '<div id="htmlLegendRailways"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendRailways);

var htmlLegendMajRoads= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Major Road', 
				html: '<div id="htmlLegendMajRoads"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendMajRoads);

var htmlLegendRecTrails= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Walking / Bicycle Paths', 
				html: '<div id="htmlLegendRecTrails"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendRecTrails);

var htmlLegendUtilities= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Pipeline / Power Transmission', 
				html: '<div id="htmlLegendUtilities"></div>'
				
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendUtilities);

var htmlLegendAvgHouse= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Average House Price (Low-to-High)', 
				html: '<div id=""><div id="avg1"></div><div id="avg2"></div><div id="avg3"></div><div id="avg4"></div><div id="avg5"></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendAvgHouse);

var htmlLegendDemoRed19= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: '% of Residents Under 19 (Low-to-High)', 
				html: '<div id=""><div id="demo1"></div><div id="demo2"></div><div id="demo3"></div><div id="demo4"></div><div id="demo5"></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendDemoRed19);

var htmlLegendDemoRed65= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: '% of Residents Over 65 (Low-to-High)', 
				html: '<div id=""><div id="demo1"></div><div id="demo2"></div><div id="demo3"></div><div id="demo4"></div><div id="demo5"></div></div>'
		}]}
],
		detectStretched: true
	});
legendsArray.push(htmlLegendDemoRed65);

var htmlLegendIndivIncome= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Individual Income (Low-to-High)', 
				html: '<div id=""><div id="income1"></div><div id="income2"></div><div id="income3"></div><div id="income4"></div><div id="income5"></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendIndivIncome);

var htmlLegendHouseIncome= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Household Income (Low-to-High)', 
				html: '<div id=""><div id="income1"></div><div id="income2"></div><div id="income3"></div><div id="income4"></div><div id="income5"></div></div>'
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendHouseIncome);
	
var htmlLegendZoning= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Residential Zoning', 
				html: '<div id="htmlLegendZoningResidential"></div>'
		}]},{elements: [{
				label: 'Industrial Zoning', 
				html: '<div id="htmlLegendZoningIndustrial"></div>'
		}]},{elements: [{
				label: 'Residual Area', 
				html: '<div id="htmlLegendZoningResidual"></div>'
		}]},{elements: [{
				label: 'Major Park', 
				html: '<div id="htmlLegendZoningPark"></div>'
		}]},
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendZoning);

var htmlLegendFilterMatch= L.control.htmllegend({
		position: 'bottomright',	
		legends:[{
			name: 'Legend',
			elements: [{
				label: 'Filter Match', 
				html: '<div id="htmlLegendFilterMatch"></div>',
				style: {
					'display': 'inline-block',
                    'background-color': '#fff',
					'border': '2px #FDE92C',
                    'width': '20px',
                    'height': '15px'
                }
		}]}
],
		detectStretched: true
	});
	
legendsArray.push(htmlLegendFilterMatch);

//Remove legend control
function removeLegends (){
//for each legend in legend array
 for (let i = 0; i < legendsArray.length; i++) {
	 var temp = legendsArray[i]._map;
	 
	 //if _map not null, remove control
	 if (temp!= null) {		 
		map.removeControl(legendsArray[i]);
	 }

}}
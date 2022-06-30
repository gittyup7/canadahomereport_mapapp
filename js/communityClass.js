var searchCommunity = L.marker([latitude, longitude]).addTo(map);

//Community Object
function community(active, community) {
  this.active = active;
  this.address = '';
  this.community = community;
  this.latitude = '';
  this.longitude = '';  
  this.zoomTo = function() {
	  alert("zoomTo");
	  if(searchMarker!=null){
		  map.removeLayer(searchMarker);
	  }
		/*searchMarker = L.marker([this.latitude, this.longitude],{icon: realEstateIcon}).addTo(map);*/
	  searchMarker.bindPopup('Community: '+ this.community);
	  
  map.flyTo([this.latitude, this.longitude], 15);
  //map.invalidateSize(true);
  }
  this.setInactive = function() {
	  if (this.active==true){
		  this.active==false;
  }}
  this.setActive = function() {
	  if (this.active==false){
		  this.active==true;
	  }}
}
//Location Object
function Location(active, address, community, latitude, longitude) {
  this.active = active;
  this.address = address;
  this.community = community;
  this.latitude = latitude;
  this.longitude = longitude;  
  this.zoomTo = function() {
	  //alert("zoomTo");
	  if(searchMarker!=null){
		  map.removeLayer(searchMarker);
	  }
	  searchMarker = L.marker([this.latitude, this.longitude],{icon: realEstateIcon}).addTo(map);
	  searchMarker.bindPopup('Address: '+ this.address + '<br> Community: '+ this.community);
	  
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
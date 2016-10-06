/* global google:false */

export default class MarkerManager {
  constructor() {
    this.generateMap = this.generateMap.bind(this);
    this.geocoder = new google.maps.Geocoder();
    this.latlng = new google.maps.LatLng(37.7758, -122.435);
    this.mapOptions = {
      zoom: 13,
      center: this.latlng
    }
    this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);
  }

  generateMap(address) {
    let that = this;
    this.geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        that.map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
            map: that.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

}
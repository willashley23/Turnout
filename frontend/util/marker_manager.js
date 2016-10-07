/* global google:false */

export default class MarkerManager {
  constructor() {
    this.generateMap = this.generateMap.bind(this);
    this.geocoder = new google.maps.Geocoder();
    this.latlng = new google.maps.LatLng(37.7758, -122.435);
    this.mapOptions = {
      zoom: 13,
      center: this.latlng,
      styles: [
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.man_made",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#f3f3f3"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#cbe6a3"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#cbe6a3"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.landcover",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#cbe6a3"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural.terrain",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#cbe6a3"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#cbe6a3"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#9cd7da"
                    }
                  ]
                }
              ]
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
      } 
    });
  }

}
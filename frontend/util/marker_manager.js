/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
  }

  updateMarkers(location){
    this.location = location;
    this._locationToAdd().forEach(this._createMarkerFromBench);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _locationToAdd() {
    const currentLocation = this.markers.map( marker => marker.benchId );
    return this.location.filter( bench => !currentLocation.includes(bench.id) );
  }

  _createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: bench.id
    });
    marker.addListener('click', () => this.handleClick(bench));
    this.markers.push(marker);
  }

}
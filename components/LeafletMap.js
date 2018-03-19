import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//import '../node_modules/leaflet/dist/leaflet.css'
export  class LeafletMap extends Component {

    constructor(){
        super()
        this.state = {
            lat: -27.482461, 
            lng: -48.410874,
            zoom: 13,
        }
    }
  
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
      </Map>
    )
  }
}
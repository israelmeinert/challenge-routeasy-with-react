import React, { Component } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet';
export default class mapa extends Component{

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  render(){
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}
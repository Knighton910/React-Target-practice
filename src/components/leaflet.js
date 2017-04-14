import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
const position = [51.0, -0.09]

class MapView extends React.Component {

  render() {
    return (
      <div className="map-parent">
        <Map className="map"

          center={position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/kelkni/cj0vtd2xw00c52rntyhy0zqah/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2Vsa25pIiwiYSI6ImNqMG4wcHBpeDAwd3AycW5vc3N4M2h4ZncifQ.ob6DzMjiuXN5BW34eDK3eg"
            attribution="<attribution>" />
        </Map>
      </div>
    )
  }
}
export default MapView;

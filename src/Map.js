import mapPoints from './mapPoints';
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
const mapStyles = require('./mapStyles.json');

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 25.71, lng: -80.28 },
    zoom: 12,
    points: mapPoints
  }

  render() {
    console.log(mapPoints);
      return (
        <div className='google-map'>
          <GoogleMapReact
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            options={{ styles: mapStyles }}
            bootstrapURLKeys={{ key: "AIzaSyD4ZzMX_7mndy2PGSdWUn1TCsFFBXNsFSs" }}
          >
            {mapPoints.map( point => {
              return (
                <Marker 
                  key={point.id}
                  category={point.category}
                  eventDescription={point.eventDescription}
                  lat={point.lat}
                  lng={point.lng}
                  location={point.location}
                  sourceProvider={point.sourceProvider}
                  youTubeUrl={point.youTubeUrl}
                />
              )
            })} 
          </GoogleMapReact>
        </div>
      )
    }
}
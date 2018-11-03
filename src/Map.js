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

  _onChildClick = (key, childProps) => {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onChildClick) {
      this.props.onChildClick(index);
    }
  }

  _onChildMouseEnter = (key, childProps) => {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(index);
    }
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(-1);
    }
  }

  _onBalloonCloseClick = () => {
    if (this.props.onChildClick) {
      this.props.onChildClick(-1);
    }
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
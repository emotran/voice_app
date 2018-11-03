import React, { Component } from 'react'

export default class Marker extends Component {
  render() {
    const divStyle= {
      height: '40px', 
      width: '40px',
      background: 'rgba(0,0,0,.7)',
      display: 'flex',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <div 
        className="point-marker" 
        style={divStyle}
        onClick={() => console.log('Hello')}>
        <h2>X</h2>
      </div>
    )
  }
}

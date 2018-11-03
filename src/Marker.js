import React, { Component } from 'react'
import YouTubePlayer from './YouTubePlayer'

export default class Marker extends Component {
  state = {
    video: false,
    button: true
  }

  handleClick = () => {
    const video = this.state.video;
    const button = this.state.button;
    this.setState({video: !video, button: !button});
  }

  closePlayer = () => {
    this.setState({video: false, button: true })
  }

  render() {
    const divStyle= {
      height: '30px', 
      width: '30px',
      background: 'rgba(0,0,0,.7)',
      display: 'flex',
      borderRadius: '50%',
      alignItems: 'center',
      position: 'relative',
      zIndex: '3',
      justifyContent: 'center'
    }    

    return (
      <div>
        <div className="youtubeModal">
          {this.state.video && 
            <div>
              <div 
                className="point-maker-false" 
                onClick= { this.closePlayer }
                style={ divStyle }>
                X
              </div>
              <YouTubePlayer
                YTid={ this.props.youTubeUrl }
              />
            </div>
          }
        </div>
        {this.state.button &&       
          <div 
            className="point-marker" 
            style={divStyle}
            onClick={ this.handleClick }        
          >
            <h2>+</h2>          
          </div>
        }
      </div>
    )
  }
}

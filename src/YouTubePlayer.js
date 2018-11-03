import React, { Component } from 'react'

let loadYT;
export default class YouTubePlayer extends Component {

  state = {
    height: '390',
    width: '640',
    videoId: 'T4d9m_1-CTU'
  }

  componentDidMount() {
    this.startVideo();
  }

  startVideo = () => {
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }
    loadYT.then((YT) => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: this.props.height || 390,
        width: this.props.width || 640,
        videoId: this.props.YTid || 'T4d9m_1-CTU',
        events: {
          onStateChange: this.onPlayerStateChange
        }
      })
    })
  }

  onPlayerStateChange = (e) => {
    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(e)
    }
  }
  
  render() {    
    return (
      <div>
        <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
      </div>
    )
  }
}

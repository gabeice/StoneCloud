import React, { Component } from 'react';

class TrackShow extends Component {
  componentDidMount() {
    this.props.fetchTrack(this.props.params.trackId);
  }

  componentDidUpdate(newProps) {
    if(newProps.params.trackId != this.props.params.trackId) {
      this.props.fetchTrack(this.props.params.trackId);
    }
  }

  render() {
    if(this.props.track) {
      return(
        <section className="track-show">
          <div id="track-controller">
            <audio src={this.props.track.song_url} controls/>

            <div id="track-info">
              <p>{this.props.track.poster}</p>
              <h2>{this.props.track.title}</h2>
            </div>
          </div>
          <img src={this.props.track.image_url}/>
        </section>
      );
    } else {
      return(<div/>)
    }
  }
}

export default TrackShow;

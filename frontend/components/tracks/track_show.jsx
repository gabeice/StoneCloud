import React, { Component } from 'react';

class TrackShow extends Component {
  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.params.trackId);
  }

  componentDidUpdate(newProps) {
    if(newProps.params.trackId != this.props.params.trackId) {
      this.props.fetchTrack(this.props.params.trackId);
    }
  }

  togglePlay(e) {
    e.preventDefault();
    const song = $('#song')[0];
    const buttonImage = $('.fa')[0];
    if(song.paused) {
      song.play();
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "2.5em";
      buttonImage.style.margin = "17px 20px";
    } else {
      song.pause();
      buttonImage.className = "fa fa-play";
      buttonImage.style.fontSize = "3em";
      buttonImage.style.margin = "14px 23px";
    }
  }

  render() {
    if(this.props.track) {
      return(
        <section className="track-show">
          <div id="track-controller">
            <audio id="song" src={this.props.track.song_url}/>
            <a href="#" id="play-button" onClick={this.togglePlay}>
              <i className="fa fa-play" aria-hidden="true"></i>
            </a>

            <div id="track-info">
              <p>{this.props.track.poster}</p>
              <h2>{this.props.track.artist} - {this.props.track.title}</h2>
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

import React, { Component } from 'react';
import { startSong, playSong, pauseSong } from '../../util/play_functions';

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.state = ({time: 0, duration: 0})
    this.togglePlay = this.togglePlay.bind(this);
  }

  checkTime() {
    const song = $('#song')[0]
    const time = song.currentTime;
    this.setState({time, duration: song.duration});
    if(song.ended) {
      const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
      const playButtonImage = $('#playbar-button-img')[0];
      pauseSong(buttonImage, playButtonImage);
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.checkTime.bind(this), 1000);
  }

  togglePlay(e) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const song = $('#song')[0];
    const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.nowPlaying.song_url) {
      startSong(playbar, buttonImage, playButtonImage);
      this.props.playTrack(this.props.nowPlaying);
    } else if(song.paused) {
      playSong(buttonImage, playButtonImage);
      song.play();
    } else {
      pauseSong(buttonImage, playButtonImage);
      song.pause();
    }
  }

  timeFormat(secs) {
    const seconds = Math.floor(secs) % 60;
    if(seconds < 10) {
      return Math.floor(secs/60) + ':0' + seconds;
    } else {
      return Math.floor(secs/60) + ':' + seconds;
    }
  }

  render() {
    return(
      <div id="playbar" className="hidden">
        <a href="#" id="playbar-button" onClick={this.togglePlay}>
          <i id="playbar-button-img" className="fa fa-play" aria-hidden="true"></i>
        </a>
        <audio id="song" src={this.props.nowPlaying.song_url} autoPlay/>
        <div id="playbar-info">
          <p>Now Playing: </p>
          <p>{this.props.nowPlaying.title}</p>
        </div>
        <p id="timer">
          {this.timeFormat(this.state.time)} / {isNaN(this.state.duration) ? "0:00" : this.timeFormat(this.state.duration)}
        </p>
      </div>
    );
  }
}

export default Playbar;

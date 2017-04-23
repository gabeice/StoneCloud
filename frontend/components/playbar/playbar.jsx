import React, { Component } from 'react';
import { startSong, playSong, pauseSong } from '../../util/play_functions';

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
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

  render() {
    return(
      <div id="playbar" className="hidden">
        <a href="#" id="playbar-button" onClick={this.togglePlay}>
          <i id="playbar-button-img" className="fa fa-play" aria-hidden="true"></i>
        </a>
        <audio id="song" src={this.props.nowPlaying.song_url} autoPlay loop/>
        <div id="playbar-info">
          <p>Now Playing: </p>
          <p>{this.props.nowPlaying.title}</p>
        </div>
      </div>
    );
  }
}

export default Playbar;

import React, { Component } from 'react';

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const song = $('#song')[0];
    const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0] ? $('#fa-' + this.props.nowPlaying.id)[0] : $('#button-image')[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.nowPlaying.song_url) {
      playbar.className = "";
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "2.5em";
      buttonImage.style.margin = "17px 20px";
      playButtonImage.className = "fa fa-pause";
      playButtonImage.style.fontSize = "1.5em";
      playButtonImage.style.margin = "17px 20px";
      this.props.playTrack(this.props.nowPlaying);
    } else if(song.paused) {
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "2.5em";
      buttonImage.style.margin = "17px 20px";
      playButtonImage.className = "fa fa-pause";
      playButtonImage.style.fontSize = "1.5em";
      playButtonImage.style.margin = "17px 20px";
      song.play();
    } else {
      song.pause();
      buttonImage.className = "fa fa-play";
      buttonImage.style.fontSize = "3em";
      buttonImage.style.margin = "14px 23px";
      playButtonImage.className = "fa fa-play";
      playButtonImage.style.fontSize = "2em";
      playButtonImage.style.margin = "14px 23px";
    }
  }

  render() {
    return(
      <div id="playbar" className="hidden">
        <a href="#" id="playbar-button" onClick={this.togglePlay}>
          <i id="playbar-button-img" className="fa fa-play" aria-hidden="true"></i>
        </a>
        <audio id="song" src={this.props.nowPlaying.song_url} autoPlay/>
      </div>
    );
  }
}

export default Playbar;

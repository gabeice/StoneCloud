import React, { Component } from 'react';
import { startSong, playSong, pauseSong } from '../../util/play_functions';

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.state = ({time: 0, duration: 0})
    this.togglePlay = this.togglePlay.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrevious = this.playPrevious.bind(this);
  }

  checkTime() {
    const song = $('#song')[0];
    const timeElapsed = $('#time-elapsed')[0];
    const waveForm = $('wave')[0];
    const prog = $('#progress-bar')[0]
    const time = song.currentTime;
    this.setState({time, duration: song.duration});
    if(timeElapsed) {
      timeElapsed.style.width = Math.floor(prog.offsetWidth/this.state.duration * this.state.time) + "px";
    }
    if(waveForm && $('#fa-' + this.props.nowPlaying.id)[0]) {
      waveForm.firstChild.style.width = Math.floor(600/this.state.duration * this.state.time) + "px";
    }
    if(song.ended) {
      const playbar = $('#playbar')[0];
      const playButtonImage = $('#playbar-button-img')[0];
      const prevButton = $('#fa-' + store.getState().nowPlaying.id)[0];
      if(this.props.upNext) {
        const buttonImage = $('#fa-' + this.props.upNext.id)[0];
        startSong(playbar, buttonImage, playButtonImage, prevButton);
        this.props.playTrack(this.props.upNext, this.props.nowPlaying.position + 1);
      } else {
        const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
        pauseSong(buttonImage, playButtonImage);
        this.props.clearTrack();
        this.props.clearList();
        $('#playbar')[0].style.display = "none";
      }
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.checkTime.bind(this), 500);
  }

  togglePlay(e) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const song = $('#song')[0];
    const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.nowPlaying.song_url) {
      startSong(playbar, buttonImage, playButtonImage);
      this.props.playTrack(this.props.nowPlaying, 0);
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

  playPrevious(e) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const playButtonImage = $('#playbar-button-img')[0];
    const prevButton = $('#fa-' + store.getState().nowPlaying.id)[0];
    if(this.props.lastSong) {
      const buttonImage = $('#fa-' + this.props.lastSong.id)[0];
      startSong(playbar, buttonImage, playButtonImage, prevButton);
      this.props.playTrack(this.props.lastSong, this.props.nowPlaying.position - 1);
    } else {
      const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
      pauseSong(buttonImage, playButtonImage);
      $('#song')[0].pause();
      this.props.clearTrack();
      this.props.clearList();
      $('#playbar')[0].style.display = "none";
    }
  }

  playNext(e) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const playButtonImage = $('#playbar-button-img')[0];
    const prevButton = $('#fa-' + store.getState().nowPlaying.id)[0];
    if(this.props.upNext) {
      const buttonImage = $('#fa-' + this.props.upNext.id)[0];
      startSong(playbar, buttonImage, playButtonImage, prevButton);
      this.props.playTrack(this.props.upNext, this.props.nowPlaying.position + 1);
    } else {
      $('#song')[0].pause();
      const buttonImage = $('#fa-' + this.props.nowPlaying.id)[0];
      pauseSong(buttonImage, playButtonImage);
      this.props.clearTrack();
      this.props.clearList();
      $('#playbar')[0].style.display = "none";
    }
  }

  loop(e) {
    e.preventDefault();
    const song = $('#song')[0];
    if(song.loop) {
      song.loop = false;
      e.target.style.color = "black";
    } else {
      song.loop = true;
      e.target.style.color = "orangered";
    }
  }

  render() {
    return(
      <div id="playbar" className="hidden">
        <section id="playbar-controls">
          <div id="playbuttons">
            <a href="#" className="playbar-button" onClick={this.playPrevious}>
              <i className="fa fa-step-backward" aria-hidden="true"></i>
            </a>
            <a href="#" className="playbar-button" onClick={this.togglePlay}>
              <i id="playbar-button-img" className="fa fa-play" aria-hidden="true"></i>
            </a>
            <a href="#" className="playbar-button" onClick={this.playNext}>
              <i className="fa fa-step-forward" aria-hidden="true"></i>
            </a>
            <a href="#" className="playbar-button" onClick={this.loop}>
              <i className="fa fa-undo" aria-hidden="true"></i>
            </a>
          </div>

          <div id="progress-info">
            <p id="timer">
              {this.timeFormat(this.state.time)}
            </p>
            <div id="outer-bar">
              <div id="progress-bar">
                <div id="time-elapsed"/>
              </div>
            </div>
            <p>{isNaN(this.state.duration) ? "-:--" : this.timeFormat(this.state.duration)}</p>
          </div>
        </section>

        <audio id="song" src={this.props.nowPlaying.song_url} autoPlay/>

        <section id="playbar-info">
          <img src={this.props.nowPlaying.image_url}/>
          <div id="playbar-track-info">
            <p id="pisces">Now Playing: </p>
            <p id="capricorn">{this.props.nowPlaying.title}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Playbar;

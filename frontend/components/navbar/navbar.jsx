import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import Search from './search';
import { startSong } from '../../util/play_functions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.playSong = this.playSong.bind(this);
    this.renderNext = this.renderNext.bind(this);
    this.removeSong = this.removeSong.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    document.getElementById('song').pause();
    document.getElementById('playbar').style.display = "none";
    this.props.logout();
  }

  toggleTracklist(e) {
    e.preventDefault();
    const tracklist = document.getElementById('tracklist');

    if(tracklist.style.display !== "flex") {
      tracklist.style.display = "flex";
      e.target.style.color = "dodgerblue";
    } else {
      tracklist.style.display = "none";
      e.target.style.color = "lightgray";
    }
  }

  renderNext(song, idx) {
    const color = song.id === this.props.nowPlaying.id ? "blue" : "";
    return(
      <li
        key={idx}
        className={color}>
        <span className="titem">
          <a
            href="#"
            className="tracklist-item"
            onClick={(e) => this.playSong(e, idx, song)}>
            {song.title}
          </a>
          <button
            className="remove-from-tracklist"
            onClick={(e) => this.removeSong(e, idx, song)}>Remove</button>
        </span>
      </li>
    );
  }

  removeSong(e, pos, song) {
    e.preventDefault();
    if(song.id != this.props.nowPlaying.id) {
      this.props.removeSong(pos);
      if(pos < this.props.nowPlaying.position) {
        this.props.playTrack(this.props.nowPlaying, this.props.nowPlaying.position - 1);
      }
    }
  }

  playSong(e, idx, song) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const buttonImage = $('#fa-' + song.id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    const prevButton = $('#fa-' + this.props.nowPlaying.id)[0];
    if(song.src != this.props.nowPlaying.song_url) {
      startSong(playbar, buttonImage, playButtonImage, prevButton);
      this.props.playTrack(song, idx);
    }
  }

  render() {
    let queue = [];
    Object.keys(this.props.queue).forEach((key) => {
      queue[key] = this.props.queue[key];
    });

    if(this.props.currentUser) {
      return(
        <section className="navbar">
          <div id="logo">
            <img src={window.images.logo} onClick={() => hashHistory.push("/tracks")}/>
          </div>
          <Search />
          <div id="athing">
            <div id="tracklist-opener">
              <i className="fa fa-list" aria-hidden="true" onClick={this.toggleTracklist}></i>
            </div>
            <Link id="post-link" to="/post"><span id="post-button">Upload</span></Link>
            <div id="user-info">
              <img src={this.props.currentUser.profile_picture_url}/>
              <Link to={`/users/${this.props.currentUser.id}`}>
                <span id="username">{this.props.currentUser.username}</span>
              </Link>
            </div>
            <button id="logout-button" onClick={this.handleLogout}>Log out</button>
          </div>

          <div id="tracklist">
            <h3>Tracklist</h3>
            <ol className="tracklist">
              {queue.map((song, idx) => this.renderNext(song, idx))}
            </ol>
          </div>
        </section>
      );
    } else {
      return(
        <div id="homepage">
          <section className="navbar">
            <div id="logo">
              <img src={window.images.logo} onClick={() => hashHistory.push("/tracks")}/>
            </div>
            <Search />

            <ul className="login-or-signup">
              <li><Link to="/login" id="login-link">Sign In</Link></li>
              <li><p>or</p></li>
              <li id="signup-link"><Link to="/signup" id="signup-link-text">Create account</Link></li>
            </ul>
          </section>
          <div className="whitespace">
            <h1>SONGS ON THIS SITE SHOULD BE PLAYED LOUD</h1>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;

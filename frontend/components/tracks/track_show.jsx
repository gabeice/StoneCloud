import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { showStart, showPlay, showPause } from '../../util/play_functions';
import Spinner from '../spinner';

class TrackShow extends Component {
  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    const playbar = $('#playbar')[0];
    const song = $('#song')[0];
    const buttonImage = $('#fa-' + this.props.track.id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.track.song_url) {
      showStart(playbar, buttonImage, playButtonImage);
      this.props.playTrack(this.props.track);
    } else if(song.paused) {
      showPlay(buttonImage, playButtonImage);
      song.play();
    } else {
      showPause(buttonImage, playButtonImage);
      song.pause();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/tracks");
  }

  render() {
    const initialState = (this.props.track &&
      this.props.track.song_url === store.getState().nowPlaying.song_url &&
      !$('#song')[0].paused) ? "fa fa-pause" : "fa fa-play";

    if(this.props.track) {
      let ownSong = this.props.currentUserId === this.props.track.user_id;

      return(
        <div>
          <section className="track-show">
            <div id="track-controller">
              <a href="#" id="play-button" onClick={this.togglePlay}>
                <i id={"fa-" + this.props.track.id} className={initialState} aria-hidden="true"></i>
              </a>

              <div id="track-info">
                <p>{this.props.track.poster}</p>
                <h2>{this.props.track.artist} - {this.props.track.title}</h2>
              </div>

            </div>
            <img src={this.props.track.image_url}/>
          </section>
          <section className={ownSong ? "edit-dropdown" : "hidden"}>
            <Link
              id="edit-link"
              to={`/edit/${this.props.track.id}`}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</Link>

            <button
              id="delete-button"
              onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
          </section>
        </div>
      );
    } else {
      return(<Spinner />)
    }
  }
}

export default TrackShow;

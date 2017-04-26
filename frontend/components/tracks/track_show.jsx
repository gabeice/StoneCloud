import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { startSong, playSong, pauseSong } from '../../util/play_functions';
import Spinner from '../spinner';
import Wavesurfer from 'react-wavesurfer';

class TrackShow extends Component {
  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderComment = this.renderComment.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.params.trackId)
      .then(() => {
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#c0c0c0',
            progressColor: '#00ced1',
            height: 175
        });
        wavesurfer.load(this.props.track.song_url)
      }).then(() => {
        $('wave')[0].firstChild.style.border = "none";
      });
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
      startSong(playbar, buttonImage, playButtonImage);
      this.props.playTrack(this.props.track);
    } else if(song.paused) {
      playSong(buttonImage, playButtonImage);
      song.play();
    } else {
      pauseSong(buttonImage, playButtonImage);
      song.pause();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/tracks");
  }

  dateInterval(date) {
    let interval = Math.floor((Date.now() - Date.parse(date))/1000);
    if(interval < 60) {
      interval = `${interval} seconds`;
    } else if(interval < 3600) {
      interval = `${Math.floor(interval/60)} minutes`;
    } else if(interval < 86400) {
      interval = `${Math.floor(interval/3600)} hours`;
    } else {
      interval = `${Math.floor(interval/86400)} days`;
    }
    if(interval.startsWith("1 ")) {
      return interval.slice(0, interval.length-1);
    } else {
      return interval;
    }
  }

  renderComment(comment) {
    return(
      <li className="comment" key={comment.id}>
        <div className="left-side">
          <img src={comment.user.profile_picture_url}/>
          <div className="comment-info">
            <p id="comment-poster">{comment.user.username}</p>
            <p>{comment.body}</p>
          </div>
        </div>
        <div className="right-side">
          <p>{this.dateInterval(comment.created_at)}</p>
          <button
            id="comment-delete"
            className={this.props.currentUserId === comment.user.id ? "" : "hidden"}
            onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
        </div>
      </li>
    );
  }

  postComment(e) {
    e.preventDefault();
    this.props.postComment({body: e.target.children[0].value, track_id: this.props.track.id});
    e.target.children[0].value = "";
  }

  render() {
    const initialState = (this.props.track &&
      this.props.track.song_url === store.getState().nowPlaying.song_url &&
      !$('#song')[0].paused) ? "fa fa-pause" : "fa fa-play";

    if(this.props.track && this.props.currentUser) {
      let ownSong = this.props.currentUserId === this.props.track.user_id;
      let comments = this.props.comments ? this.props.comments.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)) : [];

      return(
        <div>
          <section className="track-show">
            <div id="track-controller">
              <a href="#" id="play-button" onClick={this.togglePlay}>
                <i id={"fa-" + this.props.track.id} className={initialState} aria-hidden="true"></i>
              </a>

              <div id="track-info">
                <Link to={`/users/${this.props.track.user_id}`}>
                  <p>{this.props.track.poster}</p>
                </Link>
                <h2>{this.props.track.artist} - {this.props.track.title}</h2>
                <div id="waveform"></div>
              </div>

            </div>
            <img src={this.props.track.image_url}/>
          </section>
          <div id="show-extras">
            <section className={ownSong ? "edit-dropdown" : "hidden"}>
              <Link
                id="edit-link"
                to={`/edit/${this.props.track.id}`}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</Link>

              <button
                id="delete-button"
                onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
            </section>
            <section className="comments">
              <div className="comment-box">
                <img src={this.props.currentUser.profile_picture_url}/>

                <form onSubmit={this.postComment}>
                  <input type="text" placeholder="Write a comment"/>
                </form>

              </div>
              <h3 className="comments-header">{comments.length} comments:</h3>
              <ul>
                {comments.map(comment => this.renderComment(comment))}
              </ul>
            </section>
          </div>
        </div>
      );
    } else {
      return(<Spinner />)
    }
  }
}

export default TrackShow;

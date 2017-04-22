import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';

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
    const buttonImage = $('.fa')[0];
    if(song.src != this.props.track.song_url) {
      playbar.className = "";
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "2.5em";
      buttonImage.style.margin = "17px 20px";
      this.props.playTrack(this.props.track);
    } else if(song.paused) {
      playbar.className = "";
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "2.5em";
      buttonImage.style.margin = "17px 20px";
      song.play();
    } else {
      song.pause();
      buttonImage.className = "fa fa-play";
      buttonImage.style.fontSize = "3em";
      buttonImage.style.margin = "14px 23px";
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTrack(this.props.track.id);
    hashHistory.push("/tracks");
  }

  toggleDropdown(e) {

  }

  render() {
    if(this.props.track) {
      let ownSong = this.props.currentUserId === this.props.track.user_id;
      return(
        <div>
          <section className="track-show">
            <div id="track-controller">
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
      return(<div/>)
    }
  }
}

export default TrackShow;

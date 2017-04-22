import React, { Component } from 'react';
import { Link } from 'react-router';
import { playTrack } from '../../actions/play_actions';

class TrackIndexItem extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.preventDefault();

    const id = this.props.track.id;
    const playbar = $('#playbar')[0];
    const song = $('#song')[0];
    const buttonImage = $('#fa-' + id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.track.song_url) {
      playbar.className = "";
      playButtonImage.className = "fa fa-pause";
      playButtonImage.style.fontSize = "0.9em";
      playButtonImage.style.margin = "6px 6px";
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "0.9em";
      buttonImage.style.margin = "6px 6px";
      store.dispatch(playTrack(this.props.track));
    } else if(song.paused) {
      song.play();
      playButtonImage.className = "fa fa-pause";
      playButtonImage.style.fontSize = "0.9em";
      playButtonImage.style.margin = "6px 6px";
      buttonImage.className = "fa fa-pause";
      buttonImage.style.fontSize = "0.9em";
      buttonImage.style.margin = "6px 6px";
    } else {
      song.pause();
      playButtonImage.className = "fa fa-play";
      playButtonImage.style.fontSize = "1em";
      playButtonImage.style.margin = "4px 8px";
      buttonImage.className = "fa fa-play";
      buttonImage.style.fontSize = "1em";
      buttonImage.style.margin = "4px 8px";
    }
  }

  render() {
    return(
      <li>
        <section className="track-index-item">
          <img src={this.props.track.image_url}/>
          <a href="#" className="track-play-button" onClick={this.togglePlay}>
            <i id={"fa-" + this.props.track.id} className="fa fa-play" aria-hidden="true"></i>
          </a>

          <div className="track-item-info">
            <p>{this.props.track.poster}</p>
            <Link to={`/tracks/${this.props.track.id}`} id="title-link">
              {this.props.track.artist} - {this.props.track.title}
            </Link>
          </div>
        </section>
      </li>
    );
  }
}

export default TrackIndexItem;

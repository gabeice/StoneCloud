import React, { Component } from 'react';
import { Link } from 'react-router';

class TrackIndexItem extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    e.preventDefault();

    const id = this.props.track.id;
    const song = $('#track-' + id)[0];
    const buttonImage = $('#fa-' + id)[0];
    if(song.paused) {
      song.play();
      buttonImage.className = "fa fa-pause";
    } else {
      song.pause();
      buttonImage.className = "fa fa-play";
    }
  }

  render() {
    return(
      <li>
        <section className="track-index-item">
          <img src={this.props.track.image_url}/>
          <audio id={"track-" + this.props.track.id} className="track" src={this.props.track.song_url}/>
          <a href="#" className="track-play-button" onClick={this.togglePlay}>
            <i id={"fa-" + this.props.track.id} className="fa fa-play" aria-hidden="true"></i>
          </a>

          <div className="track-item-info">
            <p>{this.props.track.poster}</p>
            <Link to={`/tracks/${this.props.track.id}`} id="title-link">
              {this.props.track.title}
            </Link>
          </div>
        </section>
      </li>
    );
  }
}

export default TrackIndexItem;

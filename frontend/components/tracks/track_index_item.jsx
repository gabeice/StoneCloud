import React, { Component } from 'react';
import { Link } from 'react-router';

class TrackIndexItem extends Component {
  render() {
    return(
      <li>
        <section className="track-index-item">
          <img src={this.props.track.image_url}/>
          <audio src={this.props.track.song_url} controls/>

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

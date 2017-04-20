import React, { Component } from 'react';
import { Link } from 'react-router';

class TrackIndexItem extends Component {
  render() {
    return(
      <li>
        <Link to={`/tracks/${this.props.track.id}`}>
          {this.props.track.title}
        </Link>
      </li>
    );
  }
}

export default TrackIndexItem;

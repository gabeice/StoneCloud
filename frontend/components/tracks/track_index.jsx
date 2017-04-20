import React, { Component } from 'react';
import { Link } from 'react-router';

class TrackIndex extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    return(
      <ul>
        {this.props.tracks.map((track) => <li key={track.id}><Link to={`/tracks/${track.id}`}>{track.title}</Link></li>)}
      </ul>
    );
  }
}

export default TrackIndex;

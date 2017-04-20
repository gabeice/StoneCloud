import React, { Component } from 'react';
import { Link } from 'react-router';

class TrackIndex extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    let tracks = Object.keys(this.props.tracks).length === 0 ? [] : Object.keys(this.props.tracks);

    return(
      <ul>
        {tracks.map((track) => <li key={this.props.tracks[track].id}><Link to={`/tracks/${this.props.tracks[track].id}`}>{this.props.tracks[track].title}</Link></li>)}
      </ul>
    );
  }
}

export default TrackIndex;

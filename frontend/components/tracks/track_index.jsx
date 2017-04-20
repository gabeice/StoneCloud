import React, { Component } from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    return(
      <ul className="track-index">
        {this.props.tracks.map(track => <TrackIndexItem track={track} key={track.id}/>)}
      </ul>
    );
  }
}

export default TrackIndex;

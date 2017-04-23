import React, { Component } from 'react';
import TrackIndexItem from './track_index_item';
import Spinner from '../spinner';

class TrackIndex extends Component {
  componentDidMount() {
    this.props.fetchTracks(this.props.search);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.search != this.props.search) {
      this.props.fetchTracks(newProps.search);
    }
  }

  render() {
    if(this.props.tracks) {
      return(
        <ul className="track-index">
          {this.props.tracks.map(track => <TrackIndexItem track={track} key={track.id}/>)}
        </ul>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default TrackIndex;

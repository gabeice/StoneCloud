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
      let searchResults;

      if(!Object.keys(this.props.search)[0]) {
        searchResults = "";
      } else if(Object.keys(this.props.tracks)[0]) {
        searchResults = `Search results for "${this.props.search.search}"`;
      } else {
        searchResults = `Sorry, no results found for "${this.props.search.search}"`;
      }

      return(
        <div>
          <u><h2 className="search-results">{searchResults}</h2></u>
          <ul className="track-index">
            {this.props.tracks.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
              .map(track => <TrackIndexItem track={track} key={track.id}/>)}
          </ul>
        </div>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default TrackIndex;

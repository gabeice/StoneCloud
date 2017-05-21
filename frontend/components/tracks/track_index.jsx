import React, { Component } from 'react';
import TrackIndexItemContainer from './index_item_container';
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

  hideTracklist() {
    const tracklist = document.getElementById('tracklist');
    const tracklistButton = document.getElementById('tracklist-opener');
    tracklist.style.display = "none";
    tracklistButton.firstChild.style.color = "lightgray";
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
        <section id="index">
          <div>
            <h2 className="search-results">{searchResults}</h2>
            <ul className="track-index" onClick={this.hideTracklist}>
              {this.props.tracks.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
                .map(track => <TrackIndexItemContainer track={track} key={track.id}/>)}
            </ul>
          </div>
        </section>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default TrackIndex;

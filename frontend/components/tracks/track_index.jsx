import React, { Component } from 'react';
import TrackIndexItem from './track_index_item';
import Spinner from '../spinner';
import { startSong } from '../../util/play_functions';

class TrackIndex extends Component {
  componentDidMount() {
    this.props.fetchTracks(this.props.search);
    this.renderNext = this.renderNext.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.search != this.props.search) {
      this.props.fetchTracks(newProps.search);
    }
  }

  playSong(e, idx, song) {
    e.preventDefault();
    const playbar = $('#playbar')[0];
    const buttonImage = $('#fa-' + song.id)[0];
    const playButtonImage = $('#playbar-button-img')[0];
    if(song.src != this.props.nowPlaying.song_url) {
      startSong(playbar, buttonImage, playButtonImage);
      this.props.playTrack(song, idx);
    }
  }

  renderNext(song, idx) {
    const color = song.id === this.props.nowPlaying.id ? "blue" : "";
    return(
      <li
        key={idx}
        className={color}>
        <a href="#" onClick={(e) => this.playSong(e, idx, song)}>{song.title}</a>
      </li>
    );
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

      let queue = [];
      Object.keys(this.props.queue).forEach((key) => {
        queue[key] = this.props.queue[key];
      });

      return(
        <section id="index">
          <div>
            <u><h2 className="search-results">{searchResults}</h2></u>
            <ul className="track-index">
              {this.props.tracks.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
                .map(track => <TrackIndexItem track={track} key={track.id}/>)}
            </ul>
          </div>

          <div id="tracklist">
            <u><h3>Tracklist</h3></u>
            <ol className="tracklist">
              {queue.map((song, idx) => this.renderNext(song, idx))}
            </ol>
          </div>
        </section>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default TrackIndex;

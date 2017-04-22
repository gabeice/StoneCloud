import React, { Component } from 'react';

class Playbar extends Component {
  render() {
    return(
      <div id="playbar" className="hidden">
        <audio id="song" src={this.props.nowPlaying.song_url} controls autoPlay/>
      </div>
    );
  }
}

export default Playbar;

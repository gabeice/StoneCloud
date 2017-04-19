import React, { Component } from 'react';

class TrackShow extends Component {
  componentDidMount() {
    this.props.fetchTrack(this.props.params.trackId);
  }

  componentDidUpdate() {
    this.props.fetchTrack(this.props.params.trackId);
  }

  render() {
    return(
      <div>
        <p>Kilroy was here</p>
      </div>
    );
  }
}

export default TrackShow;

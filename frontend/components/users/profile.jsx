import React, { Component } from 'react';
import TrackIndexContainer from '../tracks/track_index_container';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return(
      <div className="profile">
        <div className="user-info">

        </div>
      </div>
    );
  }
}

export default Profile;

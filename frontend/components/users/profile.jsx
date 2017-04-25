import React, { Component } from 'react';
import TrackIndexContainer from '../tracks/track_index_container';
import Spinner from '../spinner';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if(this.props.user) {
      return(
        <div className="profile">
          <div className="user-info">
            <img src={this.props.user.profile_picture_url}/>
            <h2>{this.props.user.username}</h2>
          </div>
        </div>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default Profile;

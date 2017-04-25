import React, { Component } from 'react';
import TrackIndexContainer from '../tracks/track_index_container';
import Spinner from '../spinner';
import TrackIndexItem from '../tracks/track_index_item';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if(this.props.user) {
      return(
        <section className="profile">
          <div className="user-info">
            <img src={this.props.user.profile_picture_url}/>
            <h2>{this.props.user.username}</h2>
          </div>
          <div className="user-tracks">
            <h3><u>Tracks</u></h3>
            <ul className="user-track-index">
              {this.props.user.posted_songs.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
                .map(track => <TrackIndexItem track={track} key={track.id}/>)}
            </ul>
          </div>
        </section>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default Profile;

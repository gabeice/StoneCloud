import React, { Component } from 'react';
import TrackIndexContainer from '../tracks/track_index_container';
import Spinner from '../spinner';
import TrackIndexItem from '../tracks/track_index_item';
import { hashHistory } from 'react-router';
import EditUserContainer from './edit_user_container';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.userId != this.props.userId) {
      this.props.fetchUser(newProps.userId);
    }
  }

  handleEdit(e) {
    e.preventDefault();
    if(this.props.currentUser.id == this.props.userId) {
      $('#edit-user')[0].className = "";
    }
  }

  render() {
    if(this.props.user) {
      return(
        <section className="profile">
          <div className="user-info">
            <a
              href="#"
              id="edit-profile-pic"
              className={this.props.currentUser && this.props.currentUser.id == this.props.userId ? "" : "hidden"}
              onClick={this.handleEdit}>Change</a>

            <img src={this.props.user.profile_picture_url}/>
            <h2>{this.props.user.username}</h2>
          </div>
          <div className="user-tracks">
            <h2><u>Tracks</u></h2>
            <ul className="user-track-index">
              {this.props.user.posted_songs.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
                .map(track => <TrackIndexItem track={track} key={track.id}/>)}
            </ul>
          </div>
          <div id="edit-user" className="hidden">
            <EditUserContainer />
          </div>
        </section>
      );
    } else {
      return(<Spinner />);
    }
  }
}

export default Profile;

import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';

class TrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state)
      .then(() => hashHistory.push(`/tracks/${Object.keys(store.getState().tracks)[0]}`));
  }

  render() {
    return(
      <div className="submitForm">
        <h2>Post a song</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update("title")}/>

          <input
            type="text"
            placeholder="Artist"
            value={this.state.artist}
            onChange={this.update("artist")}/>

          <input
            type="text"
            placeholder="Song File"
            value={this.state.song_url}
            onChange={this.update("song_url")}/>

          <input
            type="text"
            placeholder="Cover Art"
            value={this.state.image_url}
            onChange={this.update("image_url")}/>

          <input className="form-submit-button" type="submit"/>
        </form>
      </div>
    );
  }
}

export default TrackForm;

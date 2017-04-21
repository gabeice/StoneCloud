import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';

class TrackForm extends Component {
  render() {
    return(
      <div className="submitForm">
        <h2>Post a song</h2>
        <form>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Artist"/>
          <input type="text" placeholder="Song File"/>
          <input type="text" placeholder="Cover Art"/>
          <input className="form-submit-button" type="submit"/>
        </form>
      </div>
    );
  }
}

export default TrackForm;

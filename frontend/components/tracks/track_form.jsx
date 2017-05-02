import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { removeTrack } from '../../actions/track_actions';

class TrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
		if(this.props.header != newProps.header) {
			this.props.removeTrack(this.props.track);
      this.setState({title: "", artist: ""});
		}
	}

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("track[title]", this.state.title === "" ? "[Untitled]" : this.state.title);
    formData.append("track[artist]", this.state.artist === "" ? "The Rolling Stones" : this.state.artist);

    if(this.state.songFile) {
      formData.append("track[song]", this.state.songFile);
    }

    if(this.state.imageFile) {
      formData.append("track[image]", this.state.imageFile);
    }

    if(this.state.id) {
      formData.append("track[id]", this.state.id);
    }

    this.props.submitAction(formData, this.state.id)
      .then(() => hashHistory.push(`/tracks/${Object.keys(this.props.tracks)[0]}`));
  }

  updateSong(e) {
    let file = e.currentTarget.files[0];
    this.setState({songFile: file});
  }

  updateImage(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }

    if(file) {
      fileReader.readAsDataURL(file);
      $('#cover')[0].style.display = "inherit";
    }
  }

  render() {
    return(
      <div className="submitForm">
        <h2>{this.props.header}</h2>
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
            id="song-file"
            type="file"
            onChange={this.updateSong}/>
          <label htmlFor="song-file">Choose a song</label>

          <p>{this.state.songFile ? this.state.songFile.name : ""}</p>

          <input
            id="image-file"
            type="file"
            onChange={this.updateImage}/>
          <label htmlFor="image-file">Add artwork</label>

          <img
            id="cover"
            className={this.props.header.startsWith("E") ? "" : "hidden"}
            src={this.state.imageUrl}/>

          <input className="form-submit-button" type="submit"/>
        </form>
      </div>
    );
  }
}

export default TrackForm;

import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = { imageFile: "", imageUrl: this.props.user.profile_picture_url };
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateImage(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }

    if(file) {
      fileReader.readAsDataURL(file);
      $('#pic')[0].style.display = "inherit";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("user[id]", this.props.user.id);

    if(this.state.imageFile) {
      formData.append("user[profile_picture]", this.state.imageFile);
    }

    this.props.updateUser(formData, this.props.user.id)
      .then(() => hashHistory.push("/tracks"));
  }

  render() {
    return(
      <div className="edit-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Change Profile Picture</h2>

          <input
            id="new-profile-pic"
            type="file"
            onChange={this.updateImage}/>
          <label htmlFor="image-file">Upload Picture</label>

          <img
            id="pic"
            src={this.state.imageUrl}/>

          <input className="form-submit-button" type="submit"/>
        </form>
      </div>
    );
  }
}

export default EditUser;

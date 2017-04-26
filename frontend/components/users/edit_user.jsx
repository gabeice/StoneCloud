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
      .then(() => {
        this.props.fetchUser(this.props.user.id);
        this.props.receiveCurrentUser(this.props.user);
        $('#edit-user')[0].className = "hidden";
      });
  }

  closeForm(e) {
    e.preventDefault();
    $('#edit-user')[0].className = "hidden";
  }

  render() {
    return(
      <div className="submitForm">
        <form onSubmit={this.handleSubmit}>
          <h2>Change Profile Picture</h2>

          <input
            id="new-profile-pic"
            type="file"
            onChange={this.updateImage}/>
          <label htmlFor="new-profile-pic">Upload Picture</label>

          <img
            id="pic"
            src={this.state.imageUrl}/>

          <input className="form-submit-button" type="submit"/>
          <a
            href="#"
            onClick={this.closeForm}>Close</a>
        </form>
      </div>
    );
  }
}

export default EditUser;

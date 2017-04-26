import React from 'react';
import { Link, hashHistory } from 'react-router';
import { receiveErrors } from '../../actions/session_actions';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			profilePic: "",
			profilePicUrl: "",
		};

    this.handleSubmit = this.handleSubmit.bind(this);
		this.showErrors = this.showErrors.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

 handleSubmit(e) {
	 e.preventDefault();
	 let formData = new FormData();

	 formData.append("user[username]", this.state.username);
	 formData.append("user[password]", this.state.password);

	 if(this.state.profilePic) {
		 formData.append("user[profile_picture]", this.state.profilePic);
	 }

	 this.props.processForm(formData)
		 .then(() => hashHistory.push("/tracks"));
 }

 updateImage(e) {
	 let file = e.currentTarget.files[0];
	 let fileReader = new FileReader();
	 fileReader.onloadend = () => {
		 this.setState({profilePic: file, profilePicUrl: fileReader.result});
	 }

	 if(file) {
		 fileReader.readAsDataURL(file);
		 $('#profile')[0].style.display = "inherit";
	 }
 }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

	componentWillReceiveProps(newProps) {
		if(this.props.formType != newProps.formType) {
			$('#profile')[0].style.display = "none";
			this.setState({
				username: "",
				password: "",
				profilePic: "",
				profilePicUrl: "",
			});
			store.dispatch(receiveErrors({}));
		}
	}

	showErrors(field) {
		if(this.props.errors[field]) {
			return this.props.errors[field].map((err, idx) => <li key={idx}>{field} {err}</li>)
		}
	}

	closeForm(e) {
    e.preventDefault();
    hashHistory.push("/");
  }

  render() {
		let baseErrors = this.props.errors["base"] ? this.props.errors["base"] : []

    return(
      <div className="submitForm">
        <h2>{this.props.actionType}</h2>
        <form onSubmit={this.handleSubmit}>
	        <input
						type="text"
						value={this.state.username}
						onChange={this.update("username")}
						placeholder="Username"/>

					<ul>
						{this.showErrors("username")}
					</ul>

	        <input
						type="password"
						value={this.state.password}
						onChange={this.update("password")}
						placeholder="Password"/>

					<ul>
						{this.showErrors("password")}
					</ul>

					<input
						id="image-file"
						className = {this.props.formType.endsWith('n') ? "" : "hidden"}
						type="file"
						onChange={this.updateImage}/>
					<label
						htmlFor="image-file"
						className = {this.props.formType.endsWith('n') ? "" : "hidden"}>Add a Profile Picture</label>

					<img
						id="profile"
						className="hidden"
						src={this.state.profilePicUrl}/>

					<ul>
						{baseErrors.map((err, idx) => <li key={idx}>{err}</li>)}
					</ul>

	        <input className="form-submit-button" type="submit" value="continue"/>

					<a
            href="#"
            onClick={this.closeForm}>Close</a>
        </form>
      </div>
    );
  }
}

export default SessionForm;

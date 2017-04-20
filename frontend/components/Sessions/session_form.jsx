import React from 'react';
import { Link, hashHistory } from 'react-router';
import { receiveErrors } from '../../actions/session_actions';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
		this.handlePass = this.handlePass.bind(this);
		this.showErrors = this.showErrors.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user).then(() => hashHistory.push("/tracks"));
 }

  handleName(e) {
    this.setState({username: e.target.value});
  }

  handlePass(e) {
    this.setState({password: e.target.value});
  }

	componentWillReceiveProps(newProps) {
		if(this.props.formType != newProps.formType) {
			store.dispatch(receiveErrors({}));
		}
	}

	showErrors(field) {
		if(this.props.errors[field]) {
			return this.props.errors[field].map((err, idx) => <li key={idx}>{field} {err}</li>)
		}
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
						onChange={this.handleName}
						placeholder="Username"/>

					<ul>
						{this.showErrors("username")}
					</ul>

	        <input
						type="password"
						value={this.state.password}
						onChange={this.handlePass}
						placeholder="Password"/>

					<ul>
						{this.showErrors("password")}
					</ul>

					<ul>
						{baseErrors.map((err, idx) => <li key={idx}>{err}</li>)}
					</ul>

	        <input id="form-submit-button" type="submit" value="continue"/>
        </form>
      </div>
    );
  }
}

export default SessionForm;

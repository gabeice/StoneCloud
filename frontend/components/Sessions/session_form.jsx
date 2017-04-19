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
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user).then(() => hashHistory.push("/"));
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

  render() {
    return(
      <div className="submitForm">
        <h2>{this.props.actionType}</h2>
        <form onSubmit={this.handleSubmit}>
	        <input
						type="text"
						value={this.state.username}
						onChange={this.handleName}
						placeholder="Username"/>

	        <input
						type="password"
						value={this.state.password}
						onChange={this.handlePass}
						placeholder="Password"/>

	        <input id="form-submit-button" type="submit" value="continue"/>
        </form>

        <ul>{this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}</ul>
      </div>
    );
  }
}

export default SessionForm;

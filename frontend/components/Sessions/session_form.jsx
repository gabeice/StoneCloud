import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user).then(() => this.redirect());
 }


  render() {
    return(
      <div>
        <h2>{this.props.actionType}</h2>
        <Link to={this.props.formType}>{this.props.altAction}</Link>
        <ul>{this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}</ul>
      </div>
    );
  }
}

export default SessionForm;

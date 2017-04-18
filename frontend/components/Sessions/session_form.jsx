import React from 'react';
import { Link, hashHistory } from 'react-router';

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
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  handlePass(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  render() {
    return(
      <div>
        <h2>{this.props.actionType}</h2>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleName}/>
        <br/>
        <input type="text" value={this.state.password} onChange={this.handlePass}/>
				<br/>
        <input type="submit"/>
        </form>
        <ul>{this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}</ul>
      </div>
    );
  }
}

export default SessionForm;

import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    hashHistory.push(`/tracks/?search=${this.state.search}`);
  }

  render() {
    return(
      <form className="search-bar" onSubmit={this.handleSubmit}>

        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}/>

        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    );
  }
};

export default Search;

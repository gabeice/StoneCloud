import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'
import SessionFormContainer from './Sessions/session_form_container';

class Root extends React.Component {
  _redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }

  _redirectIfNotLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser) {
      replace('/');
    }
  }

  render() {
    const { store } = this.props;
    return(
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App }>
            <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
            <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;

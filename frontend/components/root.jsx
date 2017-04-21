import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'
import SessionFormContainer from './Sessions/session_form_container';
import TrackShowContainer from './tracks/track_show_container';
import TrackIndexContainer from './tracks/track_index_container';
import TrackFormContainer from './tracks/track_form_container';

class Root extends React.Component {
  _redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }

  _redirectIfNotLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser) {
      replace('/login');
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
            <Route path="/post" component={ TrackFormContainer } onEnter={this._redirectIfNotLoggedIn}/>
            <Route path="/tracks" component={ TrackIndexContainer }/>
            <Route path="/tracks/:trackId" component={ TrackShowContainer }/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;

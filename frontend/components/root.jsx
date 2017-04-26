import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'
import SessionFormContainer from './Sessions/session_form_container';
import TrackShowContainer from './tracks/track_show_container';
import TrackIndexContainer from './tracks/track_index_container';
import TrackFormContainer from './tracks/track_form_container';
import ProfileContainer from './users/profile_container';
import EditUserContainer from './users/edit_user_container';
import WaveForm from './waveform';

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

  _redirectIfNotPoster(nextState, replace) {
    if (!store.getState().session.currentUser ||
    !Object.values(store.getState().tracks)[0] ||
    store.getState().session.currentUser.id != Object.values(store.getState().tracks)[0].user_id) {
      replace('/tracks');
    }
  }

  render() {
    const { store } = this.props;
    return(
      <Provider store={ store }>
        <Router history={ hashHistory }>
          <Route path="/" component={ App }>
            <Route
              path="/login"
              component={ SessionFormContainer }
              onEnter={this._redirectIfLoggedIn}/>

            <Route
              path="/signup"
              component={ SessionFormContainer }
              onEnter={this._redirectIfLoggedIn}/>

            <Route
              path="/post"
              component={ TrackFormContainer }
              onEnter={this._redirectIfNotLoggedIn}
              formType={"new"}/>

            <Route
              path="/edit/:trackId"
              component={ TrackFormContainer }
              onEnter={this._redirectIfNotPoster}
              formType={"edit"}/>

            <Route
              path="/users/:userId"
              component={ ProfileContainer }
              onEnter={this._redirectIfNotLoggedIn}/>

            <Route path="/tracks" component={ TrackIndexContainer }/>
            <Route path="/tracks/:trackId" component={ TrackShowContainer }/>
            <Route path="/waveform" component={ WaveForm }/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Root;

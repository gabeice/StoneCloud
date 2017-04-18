import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'
import SessionFormContainer from './Sessions/session_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/signup" component={ SessionFormContainer } />
      </Route>
    </Router>
  </Provider>
)

export default Root;

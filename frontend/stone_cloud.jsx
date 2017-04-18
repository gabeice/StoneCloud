import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { login } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.login = login;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to StoneCloud</h1>, root);
});

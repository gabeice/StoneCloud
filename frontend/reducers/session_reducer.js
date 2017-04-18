import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null, errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, defaultState, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return Object.assign({}, defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;

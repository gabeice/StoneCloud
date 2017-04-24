import { RECEIVE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const nextState = {};
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return state;
  }
}

export default userReducer;

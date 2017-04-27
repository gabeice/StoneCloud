import { ADD_SONG, REMOVE_SONG, CLEAR_LIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const playReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_SONG:
      const nextState = merge({}, state);
      nextState[Object.keys(state).length] = action.track;
      return nextState;
    case REMOVE_SONG:
      const newState = merge({}, state);
      delete newState[action.pos];
      return newState;
    case CLEAR_LIST:
      return {};
    default:
      return state;
  }
}

export default playReducer;

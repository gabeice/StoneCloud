import { RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const trackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      const nextState = merge({}, state);
      nextState[action.track.id] = action.track;
      return nextState;
    case REMOVE_TRACK:
      const newState = merge({}, state);
      delete newState[action.track.id];
      return newState;
    default:
      return state;
  }
}

export default trackReducer;

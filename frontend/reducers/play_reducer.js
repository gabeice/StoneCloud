import { PLAY_TRACK, CLEAR_TRACK } from '../actions/play_actions';
import { merge } from 'lodash';

const playReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_TRACK:
      return merge({}, action.track);
    case CLEAR_TRACK:
      return {};
    default:
      return state;
  }
}

export default playReducer;

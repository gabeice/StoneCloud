import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import trackReducer from './track_reducer';
import playReducer from './play_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  tracks: trackReducer,
  nowPlaying: playReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import trackReducer from './track_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  tracks: trackReducer
});

export default rootReducer;

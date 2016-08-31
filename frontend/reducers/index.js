import { combineReducers } from 'redux'
import EventsReducer from './event_reducer';
import SessionReducer from './session_reducer';

export default combineReducers({
  events: EventsReducer,
  session: SessionReducer
});
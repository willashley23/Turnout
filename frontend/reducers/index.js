import { combineReducers } from 'redux'
// import EventsReducer from './events_reducer';
import SessionReducer from './session_reducer';
//import other reducers


export default combineReducers({
// reducer1: nameOfReducer
  // events: EventsReducer,
  session: SessionReducer
});
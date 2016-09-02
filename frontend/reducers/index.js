import { combineReducers } from 'redux'
import EventsReducer from './event_reducer';
import SessionReducer from './session_reducer';
import FiltersReducer from './filters_reducer';

export default combineReducers({
  events: EventsReducer,
  session: SessionReducer,
  filter: FiltersReducer
});
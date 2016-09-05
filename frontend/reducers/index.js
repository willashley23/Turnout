import { combineReducers } from 'redux'
import EventsReducer from './event_reducer';
import SessionReducer from './session_reducer';
import FiltersReducer from './filters_reducer';
import BookmarkReducer from './bookmark_reducer';
import TicketReducer from './ticket_reducer';

export default combineReducers({
  events: EventsReducer,
  bookmarks: BookmarkReducer,
  tickets: TicketReducer,
  session: SessionReducer,
  filter: FiltersReducer
});
import { combineReducers } from 'redux'
import EventsReducer from './event_reducer';
import SessionReducer from './session_reducer';
import FiltersReducer from './filters_reducer';
import BookmarkReducer from './bookmark_reducer';
import TicketReducer from './ticket_reducer';
import LimitReducer from './limit_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  events: EventsReducer,
  bookmarks: BookmarkReducer,
  tickets: TicketReducer,
  session: SessionReducer,
  limit: LimitReducer,
  filter: FiltersReducer,
  search: SearchReducer
});
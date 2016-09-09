import {connect} from 'react-redux';
import Search from './search'; 
import { allEventsBySearch, userBookmarks, userTickets } from '../reducers/selector';
import { createBookmark, destroyBookmark } from '../actions/bookmark_actions';
import {receiveQuery} from '../actions/search_actions';
import {requestEvents} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let bookmarks;
  let tickets;
   if (state.session.currentUser) {
    bookmarks = userBookmarks(state.bookmarks, state.session.currentUser.id)
    tickets = userTickets(state.tickets, state.session.currentUser.id)
   } else {
    bookmarks = state.bookmarks;
    tickets = state.tickets;
   }
   debugger
 return {
  events: allEventsBySearch(state.events, ownProps.routeParams.query),
  query: ownProps.routeParams.query,
  currentUser: state.session.currentUser,
  bookmarks: bookmarks,
  tickets: tickets,
  filter: state.filter
 }
};

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  destroyBookmark: (bookmark) => {dispatch(destroyBookmark(bookmark))},
  receiveQuery: (query) => {dispatch(receiveQuery(query))},
  requestEvents: () => {dispatch(requestEvents())}
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Search);
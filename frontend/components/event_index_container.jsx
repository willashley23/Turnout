import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { allEvents, userBookmarks, userTickets } from '../reducers/selector';
import EventIndex from "./event_index";
import { createBookmark, destroyBookmark, requestBookmarks } from '../actions/bookmark_actions';

const mapStateToProps = (state) => {
let bookmarks;
let tickets;
 if (state.session.currentUser) {
  bookmarks = userBookmarks(state.bookmarks, state.session.currentUser.id)
  tickets = userTickets(state.tickets, state.session.currentUser.id)
 } else {
  bookmarks = state.bookmarks;
  tickets = state.tickets;
 }
  return {
    events: allEvents(state.events),
    currentUser: state.session.currentUser,
    bookmarks: bookmarks,
    tickets: tickets,
    filter: state.filter
  }
};

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  destroyBookmark: (bookmark) => {dispatch(destroyBookmark(bookmark))},
  requestEvents: () => {dispatch(requestEvents())},
  requestBookmarks: ()=> {dispatch(requestBookmarks())}
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);


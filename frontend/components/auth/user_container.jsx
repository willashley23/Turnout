import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import { requestBookmarks, destroyBookmark, createBookmark } from '../../actions/bookmark_actions';
import { requestTickets, destroyTicket } from '../../actions/ticket_actions'
import { allEvents, userBookmarks, userTickets } from '../../reducers/selector';
import { allEventsByFilter } from '../../reducers/selector';
import { updateFilter } from '../../actions/filter_actions';
import UserProfile from "./user";

const mapStateToProps = (state) => {
let tickets;
 if (state.session.currentUser) {
  tickets = userTickets(state.tickets, state.session.currentUser.id)
 } else {
  tickets = state.tickets;
 }
  return {
    currentUser: state.session.currentUser,
    requestEvents: requestEvents,
    ticket: tickets,
    bookmark: userBookmarks(state.bookmarks, state.session.currentUser.id),
    events: allEventsByFilter(state.events, state.filter, state.session.currentUser.id, state.bookmarks, state.tickets),
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestTickets: () => {dispatch(requestTickets())},
  requestBookmarks: () => {dispatch(requestBookmarks())},
  requestEvents: () => {dispatch(requestEvents())},
  destroyBookmark: (bookmark) =>{dispatch(destroyBookmark(bookmark))},
  destroyTicket: (ticket) =>{dispatch(destroyTicket(ticket))},
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  updateFilter: (filter) => dispatch(updateFilter(filter))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);


import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { requestBookmarks, destroyBookmark } from '../actions/bookmark_actions';
import { requestTickets } from '../actions/ticket_actions'
import { allEvents, userBookmarks } from '../reducers/selector';
import { allEventsByFilter } from '../reducers/selector';
import { updateFilter } from '../actions/filter_actions';
import UserProfile from "./user";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    requestEvents: requestEvents,
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
  updateFilter: (filter) => dispatch(updateFilter(filter))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);


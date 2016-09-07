import { connect } from 'react-redux';
import Categories from './categories';
import { allEventsByTag, userBookmarks, userTickets } from '../reducers/selector';
import { createBookmark, destroyBookmark } from '../actions/bookmark_actions';

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
 return {
  events: allEventsByTag(state.events, ownProps.routeParams.tag),
  tag: ownProps.routeParams.tag,
  currentUser: state.session.currentUser,
  bookmarks: bookmarks,
  tickets: tickets,
  filter: state.filter
 }
};

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  destroyBookmark: (bookmark) => {dispatch(destroyBookmark(bookmark))},
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Categories);
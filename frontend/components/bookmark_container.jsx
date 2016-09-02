import { connect } from 'react-redux';
import { requestBookmarks, createBookmark } from '../actions/bookmark_actions';
import { allEvents } from '../reducers/selector';
import Bookmark from './bookmark';

const mapStateToProps = (state) => ({
  // What do set event to if I will just pass it anyway?
  event: allEvents(state.events)
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestBookmarks: () => {
  dispatch(requestBookmarks())
  },
  createBookmark: (bookmark) => dispatch(createBookmark(bookmark))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);


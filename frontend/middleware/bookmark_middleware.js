
import {
 REQUEST_BOOKMARKS,
 RECEIVE_BOOKMARKS,
 REQUEST_BOOKMARK,
 RECEIVE_BOOKMARK,
 CREATE_BOOKMARK,
 requestBookmarks,
 receiveBookmarks,
 receiveBookmark
} from '../actions/bookmark_actions';
import {
  fetchBookmarks,
  fetchBookmark,
  createBookmark
} from '../util/bookmark_api_util';
import {hashHistory} from 'react-router';



const BookmarkMiddleware = ({getState, dispatch}) => next => action => {
  const BookmarkSuccess = data => dispatch(receiveBookmarks(data));
  const SingleBookmarkSuccess = data => dispatch(receiveBookmark(data));
  const receiveNewBookmarkSuccess = (data) => {
    dispatch(receiveBookmark(data));
};
    // debugger
  switch (action.type) {
    // case REQUEST_BOOKMARKS:
    //   fetchBookmarks(BookmarkSuccess);
    //   break;

    case CREATE_BOOKMARK:
      createBookmark(action.eventId, receiveNewBookmarkSuccess)
      break;

    // case REQUEST_BOOKMARK:
    //   fetchBookmark(action.id, SingleEventSuccess);
    //   break;

    default:
      return next(action);
  }
};

export default BookmarkMiddleware;
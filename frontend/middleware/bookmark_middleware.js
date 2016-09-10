import {
 REQUEST_BOOKMARKS,
 RECEIVE_BOOKMARKS,
 REQUEST_BOOKMARK,
 RECEIVE_BOOKMARK,
 CREATE_BOOKMARK,
 DESTROY_BOOKMARK,
 REMOVE_BOOKMARK,
 requestBookmarks,
 receiveBookmarks,
 receiveBookmark,
 removeBookmark
} from '../actions/bookmark_actions';
import {
  fetchBookmarks,
  fetchBookmark,
  createBookmark,
  destroyBookmark
} from '../util/bookmark_api_util';
import {hashHistory} from 'react-router';


const BookmarkMiddleware = ({getState, dispatch}) => next => action => {
  const BookmarkSuccess = data => dispatch(receiveBookmarks(data));
  const SingleBookmarkSuccess = data => dispatch(receiveBookmark(data));
  const receiveNewBookmarkSuccess = data => dispatch(receiveBookmark(data));
  const bookmarkRemoved = data => dispatch(removeBookmark(data))
    
  switch (action.type) {
    case REQUEST_BOOKMARKS:
      fetchBookmarks(BookmarkSuccess);
      break;

    case CREATE_BOOKMARK:
      createBookmark(action.eventId, receiveNewBookmarkSuccess)
      break;

    case DESTROY_BOOKMARK: 
      destroyBookmark(action.bookmark, bookmarkRemoved)
      break;

    default:
      return next(action);
  };
};

export default BookmarkMiddleware;
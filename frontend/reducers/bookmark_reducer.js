//import actions
import merge from 'lodash/merge';
import { RECEIVE_BOOKMARKS, REQUEST_BOOKMARKS, RECEIVE_BOOKMARK } from '../actions/bookmark_actions';

const BookmarkReducer = (state = {}, action) => {
  
  switch (action.type) {
    
    case RECEIVE_BOOKMARKS:
    return merge({}, state, action.bookmarks )
      // return action.events;
    
    case RECEIVE_BOOKMARK:
      return merge({}, state, {[action.bookmark.id]: action.bookmark})
      
    default: 
      return state
  }
}

export default BookmarkReducer

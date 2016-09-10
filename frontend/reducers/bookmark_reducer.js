import merge from 'lodash/merge';
import { RECEIVE_BOOKMARKS, REQUEST_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const BookmarkReducer = (state = {}, action) => {
  switch (action.type) {
    
    case RECEIVE_BOOKMARKS:
    return merge({}, state, action.bookmarks )
    
    case RECEIVE_BOOKMARK:
      return merge({}, state, action.bookmark)
      
    case REMOVE_BOOKMARK:
      let newState = {}
      newState = Object.assign({}, state);
      delete newState[Object.keys(action.bookmark)[0]];
      return newState;

    default: 
      return state
  }
}

export default BookmarkReducer

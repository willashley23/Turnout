//import actions
import merge from 'lodash/merge';
import { RECEIVE_BOOKMARKS, REQUEST_BOOKMARKS, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from '../actions/bookmark_actions';

const BookmarkReducer = (state = {}, action) => {
  // debugger
  //When it gets here, there are no bookmakrs in the state to begin with. 
  switch (action.type) {
    
    case RECEIVE_BOOKMARKS:
    return merge({}, state, action.bookmarks )
      // return action.events;
    
    case RECEIVE_BOOKMARK:
      return merge({}, state, action.bookmark)
      
    case REMOVE_BOOKMARK:
      let newState = Object.assign({}, state);
      delete newState[action.eventId];
      return newState;

    default: 
      return state
  }
}

export default BookmarkReducer

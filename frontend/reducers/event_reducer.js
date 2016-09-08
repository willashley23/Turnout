//import actions
import merge from 'lodash/merge';
import omit from 'lodash/omit';
import { RECEIVE_EVENTS, REQUEST_EVENTS, RECEIVE_EVENT, RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS } from '../actions/event_actions';

const EventReducer = (state = {}, action) => {
  
  switch (action.type) {
    
    case RECEIVE_EVENTS:
    return merge({}, state, action.events )
      // return action.events;
    
    case RECEIVE_EVENT:
      return merge({}, state, action.event)
      
    case RECEIVE_EVENT_ERRORS:
      return merge({}, state, {errors: action.errors})

    case CLEAR_EVENT_ERRORS:
      debugger;
      return omit(state, ['errors']);

    default: 
      return state
  }
}

export default EventReducer

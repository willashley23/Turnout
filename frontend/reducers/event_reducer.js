//import actions
import merge from 'lodash/merge';
import { RECEIVE_EVENTS, REQUEST_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';

const EventReducer = (state = {}, action) => {
  
  switch (action.type) {
    
    case RECEIVE_EVENTS:
    return merge({}, state, action.events )
      // return action.events;
    
    case RECEIVE_EVENT:
      return merge({}, state, action.event)
      
    default: 
      return state
  }
}

export default EventReducer

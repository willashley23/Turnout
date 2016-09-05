//import actions
import merge from 'lodash/merge';
import { RECEIVE_TICKETS, REQUEST_TICKETS, RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';

const TicketReducer = (state = {}, action) => {
  // debugger
  //When it gets here, there are no bookmakrs in the state to begin with. 
  switch (action.type) {
    
    case RECEIVE_TICKETS:
    return merge({}, state, action.tickets )
      // return action.events;
    
    case RECEIVE_TICKET:
      return merge({}, state, action.ticket)
      
    case REMOVE_TICKET:
      let newState = {}
      newState = Object.assign({}, state);
      delete newState[action.eventId];
      return newState;
      // Check this in debugger. Seems to successfully delete, but all tickets reappear after refresh.

    default: 
      return state
  }
}

export default TicketReducer

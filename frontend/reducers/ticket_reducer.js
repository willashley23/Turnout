//import actions
import merge from 'lodash/merge';
import { RECEIVE_TICKETS, REQUEST_TICKETS, RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';

const TicketReducer = (state = {}, action) => {
  // debugger
  //When it gets here, there are no tickets in the state to begin with. 
  switch (action.type) {
    
    case RECEIVE_TICKETS:
    return merge({}, state, action.tickets )
     
    case RECEIVE_TICKET:
      return merge({}, state, action.ticket)
      
    case REMOVE_TICKET:
      let newState = {}
      newState = Object.assign({}, state);
      delete newState[Object.keys(action.ticket)[0]];
      return newState;

    default: 
      return state
  }
}

export default TicketReducer


import {
 REQUEST_TICKETS,
 RECEIVE_TICKETS,
 REQUEST_TICKET,
 RECEIVE_TICKET,
 CREATE_TICKET,
 DESTROY_TICKET,
 REMOVE_TICKET,
 requestTickets,
 receiveTickets,
 receiveTicket,
 removeTicket
} from '../actions/ticket_actions';
import {
  fetchTickets,
  fetchTicket,
  createTicket,
  destroyTicket
} from '../util/ticket_api_util';
import {hashHistory} from 'react-router';



const TicketMiddleware = ({getState, dispatch}) => next => action => {
  const TicketSuccess = data => dispatch(receiveTickets(data));
  const SingleTicketSuccess = data => dispatch(receiveTicket(data));
  const receiveNewTicketSuccess = data => dispatch(receiveTicket(data));
  const ticketRemoved = data => dispatch(removeTicket(data))
    // debugger
  
  switch (action.type) {
    case REQUEST_TICKETS:
      fetchTickets(TicketSuccess);
      break;

    case CREATE_TICKET:
      createTicket(action.eventId, receiveNewTicketSuccess)
      break;

    // case REQUEST_BOOKMARK:
    //   fetchBookmark(action.id, SingleEventSuccess);
    //   break;

    case DESTROY_TICKET: 
      destroyTicket(action.eventId, ticketRemoved)
      break;

    default:
      return next(action);
  };
};

export default TicketMiddleware;
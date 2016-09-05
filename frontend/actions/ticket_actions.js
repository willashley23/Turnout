
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const REQUEST_TICKETS = "REQUEST_TICKETS";
export const REQUEST_TICKET = "REQUEST_TICKET";
export const CREATE_TICKET = "CREATE_TICKET";
export const DESTROY_TICKET = "DESTROY_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";

export const requestTickets = () => ({
  type: REQUEST_TICKETS
});

export const requestTicket = id => ({
  type: REQUEST_TICKET,
  id
});

export const receiveTickets = tickets => ({
  type: RECEIVE_TICKETS,
  tickets
});

export const receiveTicket = ticket => ({
  type: RECEIVE_TICKET,
  ticket
});

export const createTicket = eventId => ({
  type: CREATE_TICKET,
  eventId
});

export const destroyTicket = ticket => ({
  type: DESTROY_TICKET,
  ticket
});

export const removeTicket = ticket => ({
  type: REMOVE_TICKET,
  ticket
});


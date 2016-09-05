export const createTicket = function(eventId, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/tickets',
    data: {event_id: eventId},
    success,
    error: ()=> console.log("error")
  });
};

export const destroyTicket = function(ticket, success){
  $.ajax({
    method: 'DELETE',
    url: `api/tickets/${ticket.id}`,
    success
  });
};

export const fetchTickets = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/tickets',
    success,
    error: () => console.log("error in fetch tickets api")
  });
};
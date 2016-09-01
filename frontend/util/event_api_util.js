export const fetchEvents = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/events',
    success,
    error: () => console.log("error in fetch events api")
  });
};

export const fetchEvent = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
    success
  });
};

export const createEvent = function(event, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: event,
    success,
    error: ()=> console.log("error")
  });
};
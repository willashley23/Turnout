export const createBookmark = function(eventId, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: {event_id: eventId},
    success,
    error: ()=> console.log("error")
  });
};
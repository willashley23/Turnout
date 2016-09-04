export const createBookmark = function(eventId, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: {event_id: eventId},
    success,
    error: ()=> console.log("error")
  });
};

export const destroyBookmark = function(eventId, success){
  $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${bookmark.id}`,
    success
  });
};

export const fetchBookmarks = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/bookmarks',
    success,
    error: () => console.log("error in fetch bookmarks api")
  });
};
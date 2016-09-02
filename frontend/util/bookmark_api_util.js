export const createBookmark = function(bookmark, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: bookmark,
    success,
    error: ()=> console.log("error")
  });
};

export const RECEIVE_BOOKMARKS = "RECEIVE_BOOKMARKS";
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const REQUEST_BOOKMARKS = "REQUEST_BOOKMARKS";
export const REQUEST_BOOKMARK = "REQUEST_BOOKMARK";
export const CREATE_BOOKMARK = "CREATE_BOOKMARK";

export const requestBookmarks = () => ({
  type: REQUEST_BOOKMARKS
});

export const requestBookmark = id => ({
  type: REQUEST_BOOKMARK,
  id
});

export const receiveBOOKMARKS = bookmarks => ({
  type: RECEIVE_BOOKMARKS,
  bookmarks
});

export const receiveBookmark = bookmark => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const createBookmark = bookmark => ({
  type: CREATE_BOOKMARK,
  bookmark
});


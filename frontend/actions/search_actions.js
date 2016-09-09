export const RECEIVE_QUERY = "RECEIVE_QUERY";
export const REQUEST_QUERY = "REQUEST_QUERY";

export const requestQuery = () => ({
  type: REQUEST_QUERY
});

export const receiveQuery = query => ({
  type: RECEIVE_QUERY,
  query
});

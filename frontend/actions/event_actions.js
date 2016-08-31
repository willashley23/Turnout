
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REQUEST_EVENTS = "REQUEST_EVENTS";
export const REQUEST_EVENT = "REQUEST_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";

export const requestEvents = () => ({
  type: REQUEST_EVENTS
});

export const requestEvent = id => ({
  type: REQUEST_BENCH,
  id
});

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  benches
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  event
});


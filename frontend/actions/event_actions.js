
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REQUEST_EVENTS = "REQUEST_EVENTS";
export const REQUEST_EVENT = "REQUEST_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const requestEvents = () => ({
  type: REQUEST_EVENTS
});

export const requestEvent = id => ({
  type: REQUEST_EVENT,
  id
});

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  event
});

export const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
});

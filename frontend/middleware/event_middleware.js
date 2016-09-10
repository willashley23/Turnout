import {
 REQUEST_EVENTS,
 RECEIVE_EVENTS,
 REQUEST_EVENT,
 RECEIVE_EVENT,
 CREATE_EVENT,
 requestEvents,
 receiveEvents,
 receiveEvent,
 receiveEventErrors
} from '../actions/event_actions';
import {
  fetchEvents,
  fetchEvent,
  createEvent
} from '../util/event_api_util';
import {hashHistory} from 'react-router';

const EventMiddleware = ({getState, dispatch}) => next => action => {
  const EventSuccess = data => dispatch(receiveEvents(data));
  const SingleEventSuccess = data => dispatch(receiveEvent(data));
  const receiveNewEventSuccess = (data) => {
    dispatch(receiveEvent(data));
    hashHistory.push(`/events/${Object.keys(data)[0]}`);
};
  const failCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveEventErrors(errors));
  };
  
  switch (action.type) {
    case REQUEST_EVENTS:
      fetchEvents(EventSuccess);
      break;

    case CREATE_EVENT:
    debugger
      createEvent(action.event, receiveNewEventSuccess, failCallback)
      break;

    case REQUEST_EVENT:
      fetchEvent(action.id, SingleEventSuccess);
      break;

    default:
      return next(action);
  }
};

export default EventMiddleware;
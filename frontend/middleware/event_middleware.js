import {
 REQUEST_EVENTS,
 RECEIVE_EVENTS,
 REQUEST_EVENT,
 RECEIVE_EVENT,
 CREATE_EVENT,
 requestEvents,
 receiveEvents,
 receiveEvent
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
  switch (action.type) {
    case REQUEST_EVENTS:
      fetchEvents(EventSuccess);
      break;

    case CREATE_EVENT:
      createEvent(action.event, receiveNewEventSuccess)
      break;

    case REQUEST_EVENT:
      fetchEvent(action.id, SingleEventSuccess);
      break;

    default:
      return next(action);
  }
};

export default EventMiddleware;

import {
 REQUEST_EVENTS,
 RECEIVE_EVENTS,
 REQUEST_EVENT,
 CREATE_EVENT,
 requestEvents,
 receiveEvents
} from '../actions/event_actions';
import {
  fetchEvents,
  fetchEvent,
  createEvent
} from '../util/event_api_util';



const EventMiddleware = ({getState, dispatch}) => next => action => {
  // const res = next(action);
  const EventSuccess = data => dispatch(receiveEvents(data));
  const SingleEventSuccess = data => dispatch(receiveEvent(data));
  switch (action.type) {
    case REQUEST_EVENTS:
      fetchEvents(EventSuccess);
      break;

    case CREATE_EVENT:
      createEvent(action.event, EventSuccess)
      break;

    case REQUEST_EVENT:
      fetchEvent(SingleEventSuccess);
      break;

    default:
      return next(action);
  }
  // return res;
};

export default EventMiddleware;
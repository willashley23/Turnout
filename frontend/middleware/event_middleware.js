
import {
 REQUEST_EVENTS,
 RECEIVE_EVENTS,
 CREATE_EVENT,
 requestEvents,
 receiveEvents,
} from '../actions/event_actions';
import {
  fetchEvents,
  createEvent
} from '../util/event_api_util';



const EventMiddleware = ({getState, dispatch}) => next => action => {
  // const res = next(action);
  const EventSuccess = data => dispatch(receiveEvents(data));
  switch (action.type) {
    case REQUEST_EVENTS:
      fetchEvents(EventSuccess);
      break;

    case CREATE_EVENT:
      createEvent(action.event, EventSuccess)
      break;

    default:
      return next(action);
  }
  // return res;
};

export default EventMiddleware;
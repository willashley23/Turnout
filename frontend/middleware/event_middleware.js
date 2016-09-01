
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
  // const res = next(action);
  const EventSuccess = data => dispatch(receiveEvents(data));
  const SingleEventSuccess = data => dispatch(receiveEvent(data));
  const receiveNewEventSuccess = (data) => {
    dispatch(receiveEvent(data));
    debugger;
    hashHistory.push(`/events/${data.event.id}`);
    //maybe events/id?
};
  switch (action.type) {
    case REQUEST_EVENTS:
      fetchEvents(EventSuccess);
      break;

    case CREATE_EVENT:
      createEvent(action.event, receiveNewEventSuccess)
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
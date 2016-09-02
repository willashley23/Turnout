import merge from 'lodash/merge';

export const allEvents = (events) => Object.keys(events).map(id => events[id]);
// export const allEvents = (state) => {
//   debugger
//   return state ? Object.keys(state.events).map(key => state.events[key]) : [];
// }

export const allEventsByFilter = (events, filter) => {
  debugger
if (filter) {
  let newEvents = {}
  let objs = Object.keys(events).filter(filter);
  console.log(events)
  objs.forEach( (key) => newEvents[key] = events[key])
  return newEvents;
} else {
  return events;
}

}
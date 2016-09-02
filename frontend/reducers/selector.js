export const allEvents = (events) => Object.keys(events).map(title => events[title]);
// export const allEvents = (state) => {
//   debugger
//   return state ? Object.keys(state.events).map(key => state.events[key]) : [];
// }

export const allEventsByFilter = (events, filter) => {
if (filter) {
  console.log(events)
  let objs = Object.keys(events).filter(filter);
  return objs.map(key => events[key])
} else {
  return events;
}

}
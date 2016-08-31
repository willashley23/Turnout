export const allEvents = (events) => Object.keys(events).map(title => events[title]);
// export const allEvents = (state) => {
//   debugger
//   return state ? Object.keys(state.events).map(key => state.events[key]) : [];
// }
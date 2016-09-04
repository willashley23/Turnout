import merge from 'lodash/merge';

export const allEvents = (events) => Object.keys(events).map(id => events[id]);
// export const allEvents = (state) => {
//   debugger
//   return state ? Object.keys(state.events).map(key => state.events[key]) : [];
// }

export const allEventsByFilter = (events, filter, currentUserId, bookmarks) => {
  switch (filter) {

    case "myEvents":
      let keys = Object.keys(events).filter( (id) => {
        return(currentUserId === events[id].author_id)
      });
  // debugger
      let newEvents = {}
      keys.forEach( (key) => newEvents[key] = events[key])
      console.log(newEvents)
      return newEvents;

    case "myBookmarks":
      let bookmarkKeys = Object.keys(bookmarks).filter( (id) => {
        return(bookmarks[id].user_id === currentUserId)
      });
      let userBookmarks = {}
      bookmarkKeys.forEach( (key) => userBookmarks[key] = bookmarks[key])
      let newEvents2 = {}
      
      let converted = bookmarkKeys.map(key => bookmarks[key].event_id)
    debugger
      

      // let eventKeys = Object.keys(events).filter( (id) => {
      //   return (converted.includes(id))
      // });
      //Works but apparently breaks the entire app.
      converted.forEach( (key) => newEvents2[key] = events[key])

      return newEvents2

    // case "myTickets":
    //   return events 

    default: 
      return events

  }
}
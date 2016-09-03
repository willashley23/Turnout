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

    // case "myBookmarks":
    //   let keys2 = Object.keys(bookmarks.undefined).filter( (id) => {
    //     return(bookmarks.undefined[id].user_id === currentUserId)
    //   });
    //   let userBookmarks = {}
    //   keys2.forEach( (key) => userBookmarks[key] = bookmarks.undefined[key])
    //   let bookmarkeventkeys = Object.keys(userBookmarks).filter( (id) => {
    //     return(bookmarks.undefined[id].event_id === 9)
    //   }
    //     return events
    //   }
    // }

    // }

    // case "myTickets":
    //   return events 

    default: 
      return events

  }
}
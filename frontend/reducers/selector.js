import merge from 'lodash/merge';

export const allEvents = (events) => Object.keys(events).map(id => events[id]);

export const userBookmarks = (bookmarks, currentUserId) => {
  let bookmarkKeys = Object.keys(bookmarks).filter( (id) => {
    return(bookmarks[id].user_id === currentUserId)
  });
  let userBookmarks = {}
   bookmarkKeys.forEach( (key) => userBookmarks[key] = bookmarks[key])
   return userBookmarks
};

export const findBookmark = (bookmarks, eventId) => {
  let found;
  let keys = Object.keys(bookmarks).forEach ( (key) => {
    if (bookmarks[key].event_id === eventId) {
      // debugger
      found = bookmarks[key]
    }
  });
  return found;
};

export const userTickets = (tickets, currentUserId) => {
  let ticketKeys = Object.keys(tickets).filter( (id) => {
    return(tickets[id].user_id === currentUserId) 
  });
  let userTickets = {}
  ticketKeys.forEach( (key) => userTickets[key] = tickets[key])
  return userTickets
};

export const findTicket = (tickets, eventId) => {
  let foundTicket;
  let ticketKeys = Object.keys(tickets).forEach( (key) => {
    if (tickets[key].event_id === eventId) {
      foundTicket = tickets[key]
    }
  });
  return foundTicket;
}

export const allEventsByFilter = (events, filter, currentUserId, bookmarks, tickets) => {
  switch (filter) {

    case "myEvents":
      let keys = Object.keys(events).filter( (id) => {
        return(currentUserId === events[id].author_id)
      });
      let newEvents = {}
      keys.forEach( (key) => newEvents[key] = events[key])
      return newEvents;

    case "myBookmarks":
      let bookmarkKeys = Object.keys(bookmarks).filter( (id) => {
        return(bookmarks[id].user_id === currentUserId)
      });
      let userBookmarks = {}
      bookmarkKeys.forEach( (key) => userBookmarks[key] = bookmarks[key])
      let newEvents2 = {}
      let converted = bookmarkKeys.map(key => bookmarks[key].event_id)
      converted.forEach( (key) => newEvents2[key] = events[key])

      return newEvents2

    case "upcomingEvents":
      console.log(tickets)
      let ticketKeys = Object.keys(tickets).filter( (id) => {
        return(tickets[id].user_id === currentUserId)
      });
      let userTickets = {}
      ticketKeys.forEach( (key) => userTickets[key] = tickets[key])
      let filteredEvents = {}
      let ticketArray = ticketKeys.map(key => tickets[key].event_id)
      ticketArray.forEach( (key) => filteredEvents[key] = events[key])
      return filteredEvents

    default: 
      return events

  }
}
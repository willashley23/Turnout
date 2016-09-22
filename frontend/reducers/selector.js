import merge from 'lodash/merge';
import intersection from 'lodash/intersection';

export const allEvents = (events) => Object.keys(events).map(id => events[id]);

export const dateStringify = (date) => {
  if (date) {
    let d = new Date(date)
    let dateStr = d.toLocaleDateString("en-us",options)
    let parts = date.split('-');
    parts[1] -= 1;
    d = new Date(Date.UTC.apply(null, parts));
    let options = {
      month: "long",
      weekday: "long",
      year: "numeric",
      day: "numeric",
      timeZone: 'UTC'
    };
    dateStr = d.toLocaleDateString("en-us", options)
    return dateStr
  }
}

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

export const allEventsByFilter = (events = {}, filter, currentUserId, bookmarks = {}, tickets = {}) => {
  switch (filter) {

    case "myEvents":
      let keys = Object.keys(events).filter( (id) => {
        return(currentUserId === events[id].author_id)
      });
      let userEvents = {}
      keys.forEach( (key) => userEvents[key] = events[key])
      return userEvents;

    case "myBookmarks":
      let bookmarkKeys = Object.keys(bookmarks).filter( (id) => {
        return(bookmarks[id].user_id === currentUserId)
      });
      let userBookmarks = {}
      bookmarkKeys.forEach( (key) => userBookmarks[key] = bookmarks[key])
      let eventsByBookmark = {}
      let converted = bookmarkKeys.map(key => bookmarks[key].event_id)
      converted.forEach( (key) => eventsByBookmark[key] = events[key])

      return eventsByBookmark

    case "upcomingEvents":
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

export const allEventsByTag = (events, tag) => {
  let eventKeys = Object.keys(events).filter( (key) => {
    if (events[key].tag.split(", ").length > 1) {
      let lowerCaseTags = events[key].tag.split(", ").map(tag => tag.toLowerCase())
      return (lowerCaseTags.includes(tag))
    } else {
      return (events[key].tag.toLowerCase() === tag.toLowerCase())
    }
  })
  let eventsByTag = []
  eventKeys.forEach( (key) => eventsByTag[key] = events[key])
  return eventsByTag
};

export const allEventsBySearch = (events, query) => {
  let lowerCaseQuery = query.split(" ").map(q => q.toLowerCase());
  let lowerCaseTags;
  let eventKeysFromSearch = Object.keys(events).filter( (key) => {
    lowerCaseTags = events[key].tag.split(", ").map(tag => tag.toLowerCase())
    return (intersection(lowerCaseTags, lowerCaseQuery).length > 0)
  })
  let eventsBySearch = []
  eventKeysFromSearch.forEach( (key) => eventsBySearch[key] = events[key])
  eventsBySearch = eventsBySearch.filter(function(n){ return n != undefined });
  return eventsBySearch
};

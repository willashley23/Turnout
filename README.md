# Turnout

*Live link – www.turnout.tech*

Turnout is a full-stack web application inspired by Eventbrite and Meetup, allowing you to find and host exciting events. Turnout has a Rails backend, a PostgreSQL database, and React/Redux frontend. 

## Key Features

### Discovery 

Turnout is packed with a plethora of ways to discover new events. Users can browse events on the landing page with infinite scroll, click on event tags, click on event categories on the home page, or even use the built-in search feature to find events that suit their tastes. 

Here are some images from the site:

![landingpage](https://github.com/willashley23/Turnout/blob/master/public/landingpage.png)
![eventshow](https://github.com/willashley23/Turnout/blob/master/public/eventshow.png)
![eventcards](https://github.com/willashley23/Turnout/blob/master/public/events.png)

### Bookmarks

Users can bookmark events from nearly any place on the site, and view these events on their personal profile. Turnout is fully dynamic. The `EventIndexItem` component utilizes `toggle` to change the class of each bookmark depending on whether or not it has been clicked, thus allowing bookmark icons to change color to indicate they've been saved, so users can continuously browse events while simultaneously saving events that are of interest to them. The component also uses `handleBookmark` to search its collection of bookmarks for the ids that match `currentUser.id`, allowing the event card to correctly render the icon change relative to the current user, while still being able to hold many bookmarks of different users. 

### Tags

Users can add tags to their events. The do so by adding tags seperated with a comma. `selector` will use these tags in the `Categories` and `Search` containers to filter the `events` in the store by tags. `EventIndexItem` uses `parseFirstTags` and `parseSecondTags` to display up to two tags on the event cards. This is due to space limitations of the cards. Here is an example of the filtering algorithm used in this feature:

```
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

```

Users can also click on tags from anywhere on the site to see a filtered list of events by tag. The same logic that handles these click events is used on the `category-cards` displayed on the home page. 

The `Search` component also uses tags to filter events, however, it allows users to input a query string. It will call a special filter, `allEventsBySearch` in `selector`, which will break up the query string by using `split(" ")`, and generating an array of individual terms, and use lodash's `intersection` method to compare that with the array of tags held by each individual event. 


### Tickets

Ticketing is done in a very similar manner to bookmarking, however, there is the ability to create multiple tickets at once. When the tickets button is clicked, a `ticket-modal` will drop down prompting the user to enter a number of desired tickets. Upon submit, a for loop will be run, calling `createTicket` n times where n is the amount of tickets specified by the user. 

Tickets are displayed on the user profile, under the `My Tickets` tab. The cards rendered are very similar, but instead of displaying tags, the cards display a ticket count in the footer. These numbers are responsive, so if the user clickes the trash icon, the number will immediatley decrement. 


### Event Rendering and Creation

Events are stored in one table in the database, which contains columns for all the key information of each event, including: `id`, `user_id`, `price`, `tag`,`date`, `location`, `description`, and `updated_at`. `Events` have a `has_many` assocation with `bookmarks` and `tickets`, which are stored as an array in the jbuilder. Many components utilitize `requestEvents` to populate HTML elements with `event-cards` to display for the user. There are two main components at play here: `EventIndex`, which serves as the component in charge of rendering the entire collection of events in the database. It does so through `EventIndexItem`, which renders a single event. The other main event rendering components are `Categories` and `Search`, both of which call `EventIndexItem`, but utitlize a `handleClass` method to apply specific HTML classes to these elements so they can be styled differently upon render. 

Event creation is handled by the `NewEventForm`, which, upon submit, dispatches `createEvent`. There is a default price of 0, which will be rendered as "FREE" in the view, as well as default background images for the events should the user not supply one in the form. 


## The Future of Turnout

### Google Maps API Integration

Both the `EventDetailView` and `Search` containers have the ability to make heavy use of the Google Maps API. Events could be filtered by geolocation, while the event detail view can display a map showing the location of the event. Search could also show a minimap with pins indicating the relative position of all the events returned by the search.

### Enhanced Search 

Right now, `Search` only operates over the `tags` of events. In the future, this will be expanded to operate on the event's date, location, title, and description, allowing a more comprehensive and accurate search.


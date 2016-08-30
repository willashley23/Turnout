# Turnout

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Turnout is a web application inspired by Meetup and Eventbrite. It will be built using Rails and React/Redux. By the end of week 9, this app will, at a minimum, prodvide the following features along with an intuitive, bug-free user experience, adequate seed data and CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Events
- [ ] Bookmarks
- [ ] Tags (in tandem with categories)
- [ ] Tickets
- [ ] Infinite Scroll
- [ ] Google Maps integration (time allowing)
- [ ] Production README [sample](docs/production_readme.md) 

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Style Navbar component
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Events Model, API, and components (2 days)

**Objective:** Events can be read, bookmarked, ticketed, and destroyed through the API.

- [ ] `Event` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for events (`EventsController`)
- [ ] JBuilder views for events
- Event components and respective Redux loops
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`
- [ ] Style events components in 'card' form, including icons and effects
- [ ] Seed events

### Phase 3: Tags (2 days)

**Objective:** Events will be tagged by category, and tags are searchable.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for events
- [ ] Searching events by clicking on a tag, or home page categories
- [ ] Style search & tag components, and category cards
- [ ] Seed tags with seed data

### Phase 4: - Pagination / infinite scroll for Events Index (2 days, W2 Th 6pm)

**objective:** Add infinite scroll to Events Index

- [ ] Paginate Events Index API to send 10 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Let the user create their own events
- [ ] Let the user edit their own events
- [ ] Google Maps integration
- [ ] Multiple sessions

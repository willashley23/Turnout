# Component Hierarchy


**SessionContainer**
 - SessionForm

**HomeContainer
 - Home
 - Navbar

*EventsContainer
 - EventIndex

*TagContainer
 - EventIndex

*SearchResultsContainer
 - Search
 - EventIndex

*EventIndex
 - EventIndexItem
  + EventDetail
   * EventSearch
    - Tags
     + Tag
   * Event

**NewEventContainer**
 - NewEvent
  - CreateEventButton

**NewTag**
 - NewTag

*EventSearch
 - AutoSearch
 - AutoSearchResults

*TagsSearch
 - AutoSearch
 - AutoSearchResults

# Routes

| Path          | Component     |
| ------------- |:-------------:|
| "/sign-up"      | "AuthFormContainer" |
| "/sign-in"      | "AuthFormContainer"      |
| "/home" | "HomeContainer"      |
| "home/event/:eventId" | "EventsContainer"    |
| "home/tag/:tagId/event/:eventId" |  "TagContainer"      |
| "home/search-results" | "SearchResultsContainer"      |
| "/search" | "Search"      |
| "/event-search" | "EventSearch"    |
| "/tag-search" | "TagSearch"     |
| "/new-note" | "NewEventContainer" |
| "/new-tag" | "NewTag" |





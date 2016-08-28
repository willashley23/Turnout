# Component Hierarchy


**AuthFormContainer**
*AuthForm

**HomeContainer
*Home
*Navbar

**EventsContainer
*EventIndex

**TagContainer
*EventIndex

**SearchResultsContainer
*Search
*EventIndex

**EventIndex
*EventIndexItem
*EventDetail
*EventSearch
*Tags
*Tags
*Event

**EventSearch
*AutoSearch
*AutoSearchResults

**TagsSearch
*AutoSearch
*AutoSearchResults

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





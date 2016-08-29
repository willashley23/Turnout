```json
{
  currentUser: {
    id: 1,
    username: "Will",
    bookmarks: 2, 3, 5 (event id),
    tickets: 1 (event id) 
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    
  },
  Events: {
    1: {
      title: "Some Event",
      description: "Events occur at this event",
      price: 10,
      date: 1/1/2017,
      tags: {
        1: {
          id: 1
          name: "music"
        }
      }
    }
  },
  tagFilters: [1, 7, 14] 
}
```

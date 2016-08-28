# API Endpoints

## HTML API

### Root

- `GET/` - Load react web app

## JSON API

### Users
  
- `POST /api/users`
_ `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Events 

- `GET /api/events`
  - events index/search
  - click on `tag_name` prop to list events by tag
  - accepts dates param (time permitting)
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Tags

- Event tags will be on the event show page
- `GET /api/tags`

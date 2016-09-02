json.set! "#{bookmark.id}" do
  json.extract! bookmark, :user_id, :event_id, :id
end
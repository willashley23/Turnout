json.set! "#{ticket.id}" do
  json.extract! ticket, :user_id, :event_id, :id
end
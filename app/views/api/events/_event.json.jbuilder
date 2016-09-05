json.set! "#{event.id}" do
  json.extract! event, :title, :description, :price, :location, :tag, :id, :image_url, :date, :author_id, :bookmarks, :tickets 
end
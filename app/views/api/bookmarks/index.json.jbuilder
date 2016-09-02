@bookmarks.each do |bookmark|
    json.partial! 'api/bookmarks/bookmark', bookmark: bookmark
end
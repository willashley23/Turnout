class Event < ApplicationRecord

  has_many :bookmarks
  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"

end

class Event < ApplicationRecord

  has_one :bookmarks
  belongs_to :user

end

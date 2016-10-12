class Event < ApplicationRecord
  validates :title, :location, :date, :price, presence: true

  has_many :bookmarks
  has_many :tickets
  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: "User"
end

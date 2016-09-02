# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Event.create!({title: "Oktoberfest by the Bay 2016", price: 50, description: "stuff", tag: "beer", image_url: "assets/oktober.jpeg", date: DateTime.new(2016,10,1,17), location: "San Francisco, CA", author_id: 1})
  Event.create!({title: "2016 Sausalio Art Festival", price: 20, description: "art things", tag: "arts", image_url: "assets/art.png", date: DateTime.new(2016,9,3,17), location: "Sausalio, CA", author_id: 1 })
  Event.create!({title: "Dent: Space Exploration Together", price: 10, description: "space", tag: "science", image_url: "assets/space.jpeg", date: DateTime.new(2016,11,1,17), location: "Oxnard, CA", author_id: 2 })
  Event.create!({title: "San Francisco Comic Con", price: 150, description: "Comics!", tag:"comics", image_url: "assets/comicon.jpg", date: DateTime.new(2016,9,2,17), location: "San Francisco, CA", author_id: 3 })
  Event.create!({title: "Small Buisness Expo 2016", price: 35, description: "business", tag:"career", image_url: "assets/business.jpg", date: DateTime.new(2016,10,15,17), location: "Oakland, CA", author_id: 1 })
  Event.create!({title: "Cartooning and Graphic Novel Workshop", price: 35, description: "draw stuff", tag: "drawing", image_url: "assets/novel.jpeg", date: DateTime.new(2016,12,1,17), location: "Oakland, CA", author_id: 2 })


  #Remeber to see guest user.
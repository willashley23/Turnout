# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  user1 = User.create!({username: "guest", password: "password"})
  user2 = User.create!({username: "guest2", password: "passasdford"})
  user3 = User.create!({username: "guest3", password: "passasdfasdfsaword"})
  Event.create!({title: "Oktoberfest by the Bay 2016", price: 50, description: "stuff", tag: "beer", image_url: "assets/oktober.jpeg", date: DateTime.new(2016,10,1,17), location: "San Francisco, CA", author_id: user1.id})
  Event.create!({title: "2016 Sausalio Art Festival", price: 20, description: "art things", tag: "arts", image_url: "assets/art.png", date: DateTime.new(2016,9,3,17), location: "Sausalio, CA", author_id: user1.id})
  Event.create!({title: "Dent: Space Exploration Together", price: 10, description: "space", tag: "science", image_url: "assets/space.jpeg", date: DateTime.new(2016,11,1,17), location: "Oxnard, CA", author_id: user2.id})
  Event.create!({title: "San Francisco Comic Con", price: 150, description: "Comics!", tag:"comics", image_url: "assets/comicon.jpg", date: DateTime.new(2016,9,2,17), location: "San Francisco, CA", author_id: user2.id})
  Event.create!({title: "Small Buisness Expo 2016", price: 35, description: "business", tag:"career", image_url: "assets/business.jpg", date: DateTime.new(2016,10,15,17), location: "Oakland, CA", author_id: user3.id})
  Event.create!({title: "Cartooning and Graphic Novel Workshop", price: 35, description: "draw stuff", tag: "drawing", image_url: "assets/novel.jpeg", date: DateTime.new(2016,12,1,17), location: "Oakland, CA", author_id: user3.id})
  Event.create!({title: "Cowgirl Creamery and Marigny Social Club present: A Celebration of American Artisan Cheese", price: 105, 
    description: "Join Marigny Social Club as we partner with Bay Area favorite Cowgirl Creamery to bring you a dinner sure to make you melt.  October is American Cheese Month, and to commemorate, we present a tasting menu featuring some of the country's greatest cheese producers expertly paired with domestic biodynamic wines.  
", tag: "Food", date: DateTime.new(2016,10,14,17), location: "San Francisco, CA", author_id: user3.id, image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186390/cheese_co758f.jpg"})
  Event.create!({title:"Galvanize Web Development Immersive Prep SF", price: 699,
    description: "If you are considering becoming a Galvanize Web Development student in our immersive program, you will find this workshop will give you the tools and techniques you are expected to know before you enter the program.
It can be a little intimidating if you are new to web development to understand the necesary skills needed to gain acceptance into our 6-month program, but this 5-week part-time workshop was created specifically to help change that.",
    tag: "Tech", date: DateTime.new(2016,9,14,17), location: "San Francisco, CA", author_id: user3.id, image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186392/programming_qvdvye.jpg" })
  Event.create!({title: "Bagel Workshop 2016", price: 5,
    description: "The best bagels ever! Why? Because you make them yourself and nothing beats the flavor and aroma of hot-from-the-oven bagels, made with a fermented, wild yeast starter. Cat Shimizu, the Sour Flour Breaducator, will talk about maintaining your own wild yeast starter culture, and using it to make fabulous bagels that you can boil and bake in less than 30 minutes… perfect for breakfast or brunch anytime.  Everyone will go home with rising bagels they’ve made in class, ready to finish boiling and baking the next day.  We’ll also boil and bake bagels in class –sesame, onion, poppy seed or everything– to enjoy with cream cheese and jam. Yum! Bring a baking sheet or covered container to transport your bagels home.",
    tag: "Food", date: DateTime.new(2016,12,1,17), location: "San Francisco, CA", author_id: user2.id, image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186384/bagels_kfo11y.jpg"})
  Event.create!({title: "The Great Big Bacon Picnic 2016", price: 20,
    description: "Hailed by top food bloggers as “The Bacon Event of the Year” in 2015, this indoor/outdoor gourmet bacon festival features UNLIMITED bacon and booze from over 100 of the best chefs, brewmasters, and craft distillers in the NYC area.",
    tag: "Food", date: DateTime.new(2016,11,12,17), location: "San Francisco, CA", author_id: user2.id, image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186380/bacon_rhix7b.png"})
  Event.create!({title: "GaymerX 2016", price: 45, location: "Santa Clara, CA", author_id:user2.id, image_url:"http://res.cloudinary.com/drbaijrqx/image/upload/v1473186998/games_xf6bfb.png",
    tag: "Games", description:"GaymerX is an annual convention focused on games and gaming culture – Video Games, Tabletop Games & Card Games. We focus on creating a fun and safe space for gamers and gaymers of all identities to have fun and hang out with like minded folks. GaymerX is a “queer space”, in that many of the panels revolve around queer issues or queer devs, but GaymerX • Year Four #GX4 is made for everyone and everyone is welcome!",
    date: DateTime.new(2016,9,30,17)})
  Event.create!({title:"Cascada Rebirth Concert", price: 60, location: "San Francisco, CA", author_id: user2.id, tag: "Music", date: DateTime.new(2016,11,3,17),
    description:"Join us as we revel in the rebirth of Cascada! Cascada will be performing 'Everytime We Touch' 10 times in a row for the evening!", image_url:"http://res.cloudinary.com/drbaijrqx/image/upload/v1473186988/cascada_lvxlai.jpg"})
  Event.create!({title:"Murray High School 45th Class Reunion. Class of 1971", price: 0, location: "San Francisco, CA", tag:"Celebration", date: DateTime.new(2016,11,15,17),
    author_id: user3.id, description: "Murray Tour on Friday Sept. 16th meeting at the school's main entrance at 3:00 pm.", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186994/classy_lwmk8v.jpg"})
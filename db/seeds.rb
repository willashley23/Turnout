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
  Event.create!({title: "Oktoberfest by the Bay 2016", price: 50, description: "Oktoberfest is the world's largest Volksfest (beer festival and travelling funfair). Held annually in Munich, Bavaria, Germany, it is a 16 – 18-day folk festival running from mid or late September to the first weekend in October, with more than 6 million people from around the world attending the event every year. Locally, it is often called the Wiesn, after the colloquial name for the fairgrounds (Theresienwiese). The Oktoberfest is an important part of Bavarian culture, having been held since 1810.", tag: "beer, party", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473466614/beer_ngfqte.jpg", date: DateTime.new(2016,10,1,17), location: "San Francisco, CA", author_id: user2.id})
  Event.create!({title: "2016 Sausalio Art Festival", price: 20, description: "Fine art, music, food, and wine come together Labor Day weekend for one of the most prestigious art festivals in the country. The Sausalito Art Festival, America's Premiere Waterfront Art Festival, is held annually on Labor Day Weekend.", tag: "arts", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473466607/art_hndwal.jpg", date: DateTime.new(2016,9,3,17), location: "Sausalio, CA", author_id: user2.id})
  Event.create!({title: "Dent: Space Exploration Together", price: 10, description: "On September 21-22, 2016, Dent:Space takes place at the Innovation Hangar at the Palace of Fine Arts (formerly the Exploratorium museum) with two stages of fascinating speakers spanning the technological, artistic, commercial, scientific, educational, and DIY aspects of space exploration. We're also putting together an exhibit hall for the conference –– kind of a World's Fair-like set of interactive demos that illustrate the future of space exploration and its many possibilities", tag: "science, stem", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473466624/space_yohs2t.jpg", date: DateTime.new(2016,11,1,17), location: "Oxnard, CA", author_id: user2.id})
  Event.create!({title: "San Francisco Comic Con", price: 150, description: "The San Francisco Comic Con is a comic book convention located in San Francisco, California. It is produced and promoted by Imaginarium LLC (the team behind the Tampa Bay Comic Con and Indiana Comic Con), which is an event production and advertising agency comprised entirely of people that have a true love for comic books, stories, artwork and pop-culture. The people of San Francisco deserve a comic convention of their very own, and the San Francisco Comic Con is San Francisco’s very own!", tag:"comics", image_url: "assets/comicon.jpg", date: DateTime.new(2016,9,2,17), location: "San Francisco, CA", author_id: user2.id})
  Event.create!({title: "Small Buisness Expo 2016", price: 35, description: " This event will take place on Wednesday, September 28th, at the ZPA Banquet Hall. The expo aims to highlight various businesses and services that are located within the City of Perth Amboy as well as Middlesex County. In addition to the expo, there will be an informational presentation by the Honorable Mayor Wilda Diaz", tag:"career, networking", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473466618/business_fef6bc.jpg", date: DateTime.new(2016,10,15,17), location: "Oakland, CA", author_id: user3.id})
  Event.create!({title: "Cartooning and Graphic Novel Workshop", price: 35, description: "To commemorate The Center for Cartoon Studies’ 10 year anniversary, we want to share our comics’ knowledge and passion with your college. Throughout the 2015-16 academic year, a CCS faculty member will beam into 10 classrooms for a free 30-minute presentation.", tag: "art, drawing", image_url: "assets/novel.jpeg", date: DateTime.new(2016,12,1,17), location: "Oakland, CA", author_id: user3.id})
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
  Event.create!({title: "GaymerX 2016", price: 45, location: "Santa Clara, CA", author_id: user2.id, image_url:"http://res.cloudinary.com/drbaijrqx/image/upload/v1473186998/games_xf6bfb.png",
    tag: "Games", description:"GaymerX is an annual convention focused on games and gaming culture – Video Games, Tabletop Games & Card Games. We focus on creating a fun and safe space for gamers and gaymers of all identities to have fun and hang out with like minded folks. GaymerX is a “queer space”, in that many of the panels revolve around queer issues or queer devs, but GaymerX • Year Four #GX4 is made for everyone and everyone is welcome!",
    date: DateTime.new(2016,9,30,17)})
  Event.create!({title:"Cascada Rebirth Concert", price: 60, location: "San Francisco, CA", author_id: user2.id, tag: "Music", date: DateTime.new(2016,11,3,17),
    description:"Join us as we revel in the rebirth of Cascada! Cascada will be performing 'Everytime We Touch' 10 times in a row for the evening!", image_url:"http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473186988/cascada_lvxlai.jpg"})
  Event.create!({title:"Murray High School 45th Class Reunion. Class of 1971", price: 0, location: "San Francisco, CA", tag:"Celebration", date: DateTime.new(2016,11,15,17),
    author_id: user3.id, description: "Murray Tour on Friday Sept. 16th meeting at the school's main entrance at 3:00 pm.", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473186994/classy_lwmk8v.jpg"})

  Event.create!({title: "Cooper U: Service Design Immersive", location: "San Francisco, CA", author_id: user3.id, price: 45, date: DateTime.new(2016,10,1,17), tag:"tech, design", description: "A few years ago, business leaders lost sleep wondering if their website or app was engaging enough. Today, we realize these touchpoints, while important, are only a small part of a much more complex journey. Great service experiences involve elegant orchestration of all the moments customers or clients engage with your organization, whether they’re attending an event, calling a 1-800 number, or receiving a text. In this 2-day workshop, you’ll learn (and apply!) practical tools that will help you understand your customer’s entire journey, identify ways to make it more seamless and delightful, and positively impact your success metrics.", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473447635/immes_l0bd9w.png"})
  Event.create!({title: "Introduction to UX Design Workshop", location: "San Francisco, CA", author_id: user3.id, price: 20, date: DateTime.new(2016,11,30,17), tag: "tech, ux", description: "Our Introduction to UX Design workshop is a one-day intensive focused on introducing user experience fundamentals to those looking to apply UX to their everyday work, new service offerings to clients, or future career goals in the field. We'll work through the UX design process from end-to-end, pointing out essential insights, tools, terminology, and practical exercises to put you on the path to designing your own apps, websites, and digital products.
You'll also hear first-hand experiences from instructors, and gain an opportunity to connect with fellow creatives in this interactive workshop.", image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473447640/ux_research_kvvd6f.jpg"})
  Event.create!({title: "Law Firm Marketing Interactive 2 day Workshop", location: "San Francisco, CA", author_id: user3.id, price: 100, date: DateTime.new(2016,12,15,17) , tag: "business, law", description: "Join us for a two day Law Firm Marketing workshop on Friday, October 14th and Saturday, October 15th from 10:00am to 5:00pm at WeWork South Lake Union, on 500 Yale Ave N, Seattle, WA 98109 Come out and learn about the many ways you or your business can enhance revenue thanks to law firm marketing." ,image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473447637/law_joyrsh.jpg"})
  Event.create!({title: "Learn How to Grow your business with GOOGLE Advertising", location: "San Francisco, CA", author_id: user3.id, price: 55, date:  DateTime.new(2016,9,23,17), tag: "marketing, business, networking", description: "Every business can succeed online. You're invited to join Zora Digital for an event, hosted with Google, about how digital marketing can help you thrive on the Web. In a mobile-first world, businesses have the opportunity to be highly relevant by considering their consumers' intent, context, and immediacy. Tim will share the latest mobile trends, research, and insights to help businesses reach customers in all their moments of need." , image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473447643/google_huecta.png"})
  Event.create!({title: "Gwen Stefani Concert Shuttle", location: "San Francisco, CA", author_id: user3.id, price: 15, date:  DateTime.new(2016,10,30,17), tag: "music", description: "M Ride takes the stress out of getting to your favorite concerts and festivals in the Bay Area. Hop on one of our luxury party buses and make getting there fun! Hop on the bus and enjoy round-trip, luxury transportation to see Gwen Stefani at Shoreline Amphitheater on October 8. The bus will pick up at Bar None (1980 Union Street) at 4:30PM." , image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/c_scale,h_230,w_460/v1473448414/gewn_thhdcz.jpg"})
  Event.create!({title: "NOA IN CONCERT with Gil Dor, Musical Director and Guitars", location: "San Francisco, CA", author_id: user3.id, price: 30, date:  DateTime.new(2016,11,3,17), tag: "music", description: "Event Description
Achinoam Nini (Noa) is Israel’s leading international singer/songwriter.  Along with her long-time collaborator, Gil Dor, she has released more than 15 albums that have sold millions of copies throughout the world.  At home in many languages, she is a favorite in Italy, where she has performed before several Popes.  She has sung here at the White House and has shared the stage with Andrea Bocelli, Quincy Jones, Sting and Stevie Wonder, among others." , image_url: "http://res.cloudinary.com/drbaijrqx/image/upload/v1473448420/gildor_axcj3y.png"})

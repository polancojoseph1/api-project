const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Itinerary = require("./models/Itinerary.js");
const { users, places, itineraries } = require("./index.js")

Itinerary.deleteMany({})
  .then(res => Itinerary.create(itineraries))
  .then(itineraries => {
    console.log("seeded itineraries")
    process.exit();
})

Place.deleteMany({})
  .then(res => Place.create(places))
  .then(places => {
    console.log("seeded places")
})

User.deleteMany({})
  .then(res => User.create(users))
  .then(users => {
    console.log("seeded users")
})

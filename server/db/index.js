const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Itinerary = require("./models/Itinerary.js");

let places = [
  {
    name: "Joe's Pizza",
    city: "New York City",
    formattedAddress: "Union Square 14th Street"
  },
  {
    name: "Chipotle",
    city: "New York City",
    formattedAddress: "34th Street Harold Square"
  },
  {
    name: "Lenwich",
    city: "New York City",
    formattedAddress: "Wall Street"
  }
];

let itineraries = [
  {
    city: "New York",
    arrival: "January 1st",
    departure: "February 1st",
    timeOfStay: 31
  },
  {
    city: "Paris",
    arrival: "January 1st",
    departure: "February 1st",
    timeOfStay: 31
  },
  {
    city: "Miami",
    arrival: "January 1st",
    departure: "February 1st",
    timeOfStay: 31
  },
];

let users = [
  {
    firstName: "Joseph",
    lastName: "Polanco",
    email: "jp@gmail.com",
    password: "123"
  },
  {
    firstName: "Nate",
    lastName: "Derosa",
    email: "nd@gmail.com",
    password: "123"
  },
  {
    firstName: "Ronnie",
    lastName: "Soto",
    email: "rs@gmail.com",
    password: "123"
  },
];

Itinerary.deleteMany({})
  .then(res => Itinerary.create(itineraries))
  .then(itineraries => {
    process.exit();
})

Place.deleteMany({})
  .then(res => Place.create(places))
  .then(places => {
    process.exit();
})

User.deleteMany({})
  .then(res => User.create(users))
  .then(users => {
    process.exit();
  })

  console.log(User.find())


module.exports = { User, Place, Itinerary };
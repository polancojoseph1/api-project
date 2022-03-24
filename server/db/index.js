const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Itinerary = require("./models/Itinerary.js");
let mongoose  = require('mongoose');

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


async function makeDefaultConnection() {
  let uri = process.env.MONGOLAB_URI || `mongodb://127.0.0.1:27017/api-project`;
  console.log('Connecting to DB : ', uri);

  let conn = mongoose.createConnection(uri);

  console.log(conn, "connnnn")

  await conn.on('error', function(err){
    console.log('Connection Error ::: ', err);
  });

  console.log(User, "Something")

  // await conn.model('User', User);
  // await conn.model('Place', Place);
  // await conn.model('Itinerary', Itinerary);
  return conn;
}

module.exports.defaultConnection = makeDefaultConnection();
  


module.exports = { User, Place, Itinerary, users, places, itineraries };
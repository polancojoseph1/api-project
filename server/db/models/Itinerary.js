const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/api-project`, { useNewURLParser: true });

let Itinerary = mongoose.model("Itinerary", new mongoose.Schema({
  city: {
    type: String
  },
  arrival: {
    type: String
  },
  departure: {
    type: String
  },
  timeOfStay: {
    type: Number
  }
}));

module.exports = Itinerary;
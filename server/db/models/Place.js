const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || `mongodb://127.0.0.1:27017/api-project`, { useNewURLParser: true });

let Place = mongoose.model("Place", new mongoose.Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  formattedAddress: {
    type: String
  }
}));

module.exports = Place;
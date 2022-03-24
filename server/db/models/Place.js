const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI, "Process ENV!!!")

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/api-project`, { useNewURLParser: true, useUnifiedTopology: true });

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
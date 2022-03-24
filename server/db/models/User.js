const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/api-project`, { useNewURLParser: true, useUnifiedTopology: true });

const User = mongoose.model("User", new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}));

module.exports = User;
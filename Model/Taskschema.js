let mongoose = require("mongoose")

let UserMOMO = new mongoose.Schema({
  name: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String
  },
  password: {
    require: true,
    type: String
  },
  role: {
    type: String,
    require: true,
    default: "user"
  }
})

module.exports = mongoose.model("User", UserMOMO)
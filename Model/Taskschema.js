let mongoose = require("mongoose");
let { Schema } = mongoose;

let taskSchema = new Schema({
  name: String,
  wifeName: String
})

module.exports = mongoose.model("Task", taskSchema)
let mongoose = require("mongoose")

function connection() {
  try {
    mongoose.connect("mongodb+srv://crud:crud@cluster0.kiqwn.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0").then(() => {
      console.log("Database Connected")
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = connection;
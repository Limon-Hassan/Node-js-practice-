let mongoose = require("mongoose")

function connection() {
  try {
    mongoose.connect(process.env.Db_URL).then(() => {
      console.log("Database Connected")
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = connection;
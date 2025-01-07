let express = require("express");
const connection = require("./dbConfig");
const Taskschema = require("./Model/Taskschema");
let app = express();
connection()
app.post(('/'), async (req, res) => {
  let task = new Taskschema({
    name: "Limon"
  })
  let finalresult = await task.save()
  res.status(201).send(finalresult)
})

app.listen(5000, () => {
  console.log("the server is running")
})
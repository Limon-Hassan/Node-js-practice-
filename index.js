let express = require("express");
const connection = require("./dbConfig");
const Taskschema = require("./Model/Taskschema");
let app = express();
connection()
app.use(express.json())

app.post('/create', async (req, res) => {
  let { displayName } = req.body

  let dhoroAmi = new Taskschema({
    name: displayName
  })
  await dhoroAmi.save()
  res.status(201).send("data gese re !")
})

// app.post(('/'), async (req, res) => {
//   let task = new Taskschema({
//     name: "Limon"
//   })
//   let finalresult = await task.save()
//   res.status(201).send(finalresult)
// })

app.listen(5000, () => {
  console.log("the server is running")
})
let express = require("express");
const connection = require("./dbConfig");
const Taskschema = require("./Model/Taskschema");
let app = express();
connection()
app.use(express.json())

app.post('/create', async (req, res) => {
  let { displayName, Nikname } = req.body

  let dhoroAmi = new Taskschema({
    name: displayName,
    wifeName: Nikname,
  })
  await dhoroAmi.save()
  res.status(201).send("data gese re !")
})

app.get('/paisire', async (req, res) => {
  let results = await Taskschema.find({})
  res.status(200).send(results)
})

app.delete('/deletekorbo/:name', (req, res) => {
  let { name } = req.params
  res.send(name)
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
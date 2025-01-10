let express = require("express");
const connection = require("./dbConfig");
const Taskschema = require("./Model/Taskschema");
let app = express();
connection()
app.use(express.json())

//#Data create korlam 
app.post('/create', async (req, res) => {
  let { displayName, Nikname } = req.body

  let dhoroAmi = new Taskschema({
    name: displayName,
    wifeName: Nikname,
  })
  await dhoroAmi.save()
  res.status(201).send("data gese re !")
})

//Data dekhlam
app.get('/paisire', async (req, res) => {
  let results = await Taskschema.find({})
  res.status(200).send(results)
})

//Data Delete Korlam
app.delete('/deletekorbo/:id', async (req, res) => {
  let { id } = req.params
  let deleteMami = await Taskschema.findOneAndDelete({ _id: id })
  res.status(200).send({ msg: "delete hoise", data: deleteMami })
})

// Data Update
app.patch('/update/:id', async (req, res) => {
  let { id } = req.params;
  let { displayName } = req.body
  let update = await Taskschema.findOneAndUpdate({ _id: id }, { name: displayName }, { new: true })
  res.status(200).send({ msg: "Update Hoise", data: update })
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
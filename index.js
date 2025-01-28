let express = require("express");
const connection = require("./dbConfig");
const Taskschema = require("./Model/Taskschema");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userMidle = require("./Midlewere/userMidlewere");
let app = express();
require('dotenv').config()
connection()
app.use(express.json())
console.log(process.env.Db_URL)


app.post('/registation', async (req, res) => {
  let { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    res.status(404).send({ mgs: "Please Fill all" })
  } else {
    if (role == "admin" || role == "user") {
      bcrypt.hash(password, 10, async function (err, hash) {
        let gelore = new Taskschema({
          name,
          email,
          password: hash,
          role
        })
        await gelore.save()
        res.status(201).send({ mgs: "Data gese ree!!!!" })
      })
    } else {
      res.send("bad")
    }



  }


})

app.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let existingUser = await Taskschema.findOne({ email })

  if (existingUser) {
    bcrypt.compare(password, existingUser.password, function (err, result) {
      if (result) {
        let role = existingUser.role;
        let token = jwt.sign({ email, role }, process.env.JTW_Token, { expiresIn: '1h' })
        res.status(200).send({ msg: "Login Success", data: token })
      } else {
        res.status(404).send({ mgs: "Invaild email/password" })
      }
    })

  } else {
    res.status(404).send({ mgs: "Invaild email/password" })
  }
})

app.get("/alluser", userMidle, async (req, res) => {
  try {
    let users = await Taskschema.find()
    res.send(users)
  } catch (error) {
    console.log(error)
    res.status(404).send({ mgs: "Invaild email/password" })
  }
})

app.listen(5000, () => {
  console.log("the server is running")
})
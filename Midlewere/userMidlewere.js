var jwt = require('jsonwebtoken');

function userMidle(req, res, next) {
  if (req.headers.token) {
    jwt.verify(req.headers.token, process.env.JTW_Token, function (err, decoded) {
      if (err) {
        res.status(404).send(err)
      } else {
        if (decoded.email) {
          if (decoded.role == "admin" || "user") {

            next()
          } else {
            res.status(404).send({ msg: "where id your role ?" })
          }
        } else {
          res.status(404).send({ msg: "email not found !" })
        }
      }
    })
  } else {
    res.status(404).send({ mgs: "You don't have any permission" })
  }
}

module.exports = userMidle;
const express = require("express");
const jwt = require("jsonwebtoken");
const passwordHash = require("password-hash");
const config = require("config");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const db = require("../dbPoolConnection");

const saltrounds = 10;
const router = express.Router();

// router.post("/", async (req, res) => {
//   const token = jwt.sign({ _id: user }, "jwtPrivateKey");
//   jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
//     console.log(decoded.id); // bar
//   });
//   if (req.body.email === user.email && req.body.password === user.password) {
//     res.header("x-auth-token", token).send({
//       status: "Authentication Successful",
//       userid: "123",
//       address,
//       token,
//     });
//   } else {
//     res.status(400).send({ status: "Authentication Failed" });
//   }
// });

router.post("/", (req, res) => {
  const { password } = req.body;
  const hashedPassword = md5(password);
  const sql = `CALL authenticate_user('${req.body.email}','${hashedPassword}');`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
    }
    if (result && result.length > 0) {
      if (result[0][0].status === "SUCCESS") {
        console.log("result", result);
        const token = jwt.sign({ _id: result[0][0] }, "jwtPrivateKey");
        // jwt.verify(token, "jwtPrivateKey");
        res.header("x-auth-token", token).send({
          status: "Authentication Successful",
          user: result[0][0],
          token,
        });
      } else if (result[0][0].status === "FAILED") {
        res.status(400).send({ status: "Authentication Failed" });
      }
    }
  });
});

module.exports = router;

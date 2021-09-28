const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const db = require("../dbPoolConnection");

const saltrounds = 10;
const router = express.Router();
const user = {
  id: "1",
  email: "abc@gmail.com",
  password: "123456",
};

// router.post("/customer", async (req, res) => {
//   const token = jwt.sign({ _id: user }, "jwtPrivateKey");
//   jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
//     console.log(decoded.id); // bar
//   });
//   if (req.body.email && req.body.email === user.email) {
//     res.status(400).send({ status: "User already exists" });
//     return;
//   }
//   if (req.body.password && req.body.password.length < 6) {
//     res.status(400).send({ status: "Password Length less than 6" });
//     return;
//   }
//   res
//     .header("x-auth-token", token)
//     .send({ status: "Authentication Sucess", token, userid: "1" });
// });

router.post("/customer", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);
  const sql = `CALL customer_put('${name}','${email}', '${hashedPassword}', null, null, null, null, null, null, null, null, null);`;
  // const sql = `CALL authenticate_user('doe_jane@gmail.com','hashed2');`;
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
    }
    if (result && result.length > 0) {
      if (result[0][0].status === "USER_ADDED") {
        const token = jwt.sign({ _id: result[0][0] }, "jwtPrivateKey");
        jwt.verify(token, "jwtPrivateKey");
        res.header("x-auth-token", token).send({
          status: "User Added Successfully",
          user: result[0][0],
          token,
        });
      } else if (result[0][0].status === "USER_EXISTS") {
        res.status(400).send({ status: "User already exists" });
      }
    }
  });
});

// router.post("/owner", async (req, res) => {
//   console.log(req.body);
//   if (req.body.email && req.body.email === "abc@gmail.com") {
//     res.send({ status: "Authentication Failed", userid: "-1" });
//   } else if (req.body.password && req.body.password.length < 6) {
//     res.send({ status: "Password Length less than 6", userid: "-1" });
//   } else {
//     res.send({ status: "Authentication Sucess", userid: "1" });
//   }
// });

const processAddress = (addr) => addr.split(",");

router.post("/owner", async (req, res) => {
  console.log(req.body);
  const { name, email, password, location: address } = req.body;
  const hashedPassword = md5(password);
  const parsedLocation = processAddress(address);
  const sql = `CALL restaurant_put(-1, '${name}','${email}', '${hashedPassword}', '', '${parsedLocation[0]}', '${parsedLocation[1]}', '${parsedLocation[2]}', '${parsedLocation[3]}', '${parsedLocation[4]}', null, null, null, null, null, null, null);`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
    }
    if (result && result.length > 0) {
      if (result[0][0].status === "RESTAURANT_ADDED") {
        const token = jwt.sign({ _id: result[0][0] }, "jwtPrivateKey");
        res.header("x-auth-token", token).send({
          status: "User Added Successfully",
          user: result[0][0],
          token,
        });
      } else if (result[0][0].status === "RESTAURANT_ALREADY_EXISTS") {
        res.status(400).send({ status: "Restaurant already exists" });
      }
    }
  });
});

module.exports = router;

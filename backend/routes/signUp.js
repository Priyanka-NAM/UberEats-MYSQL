const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const db = require("../dbPoolConnection");

const saltrounds = 10;
const router = express.Router();

router.post("/customer", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = md5(password);
  const sql = `CALL customer_put('${name}','${email}', '${hashedPassword}', null, null, null, null, null, null, null, null, null);`;
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
        jwt.verify(token, "jwtPrivateKey");
        res.header("x-auth-token", token).send({
          status: "Restaurant Added Successfully",
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

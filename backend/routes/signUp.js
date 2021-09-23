const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const db = require("../dbPoolConnection");

const router = express.Router();
const user = {
  id: "1",
  email: "abc@gmail.com",
  password: "123456",
};

router.post("/customer", async (req, res) => {
  const token = jwt.sign({ _id: user }, "jwtPrivateKey");
  jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
    console.log(decoded.id); // bar
  });
  if (req.body.email && req.body.email === user.email) {
    res.status(400).send({ status: "User already exists" });
    return;
  }
  if (req.body.password && req.body.password.length < 6) {
    res.status(400).send({ status: "Password Length less than 6" });
    return;
  }
  res
    .header("x-auth-token", token)
    .send({ status: "Authentication Sucess", token, userid: "1" });
});

router.post("/owner", async (req, res) => {
  console.log(req.body);
  if (req.body.email && req.body.email === "abc@gmail.com") {
    res.send({ status: "Authentication Failed", userid: "-1" });
  } else if (req.body.password && req.body.password.length < 6) {
    res.send({ status: "Password Length less than 6", userid: "-1" });
  } else {
    res.send({ status: "Authentication Sucess", userid: "1" });
  }
});

module.exports = router;

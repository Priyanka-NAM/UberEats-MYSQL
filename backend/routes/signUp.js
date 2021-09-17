const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.post("/customer", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email === "abc@gmail.com") {
    res.send({ status: "Authentication Failed", userid: "-1" });
  } else if (req.body.password && req.body.password.length < 6) {
    res.send({ status: "Password Length less than 6", userid: "-1" });
  } else {
    res.send({ status: "Authentication Sucess", userid: "1" });
  }
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

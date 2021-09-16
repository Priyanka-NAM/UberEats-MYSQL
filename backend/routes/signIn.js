const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  if (req.body.email === "abc@gmail.com" && req.body.password === "123456") {
    res.send({ status: "Authentication Successful", userid: "123" });
  } else {
    res.send({ status: "Authentication Failed", userid: "-1" });
  }
});
module.exports = router;

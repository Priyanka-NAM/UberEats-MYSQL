const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

const address = {
  addressDescription: "123 San Lenardo St #5, Oakland, CA, 95694",
  addressLine1: "123 San Lenardo St #5",
  city: "Oakland",
  state: "CA",
  country: "US",
  zipcode: "95694",
};

router.post("/", async (req, res) => {
  console.log(req.body);
  if (req.body.email === "abc@gmail.com" && req.body.password === "123456") {
    res.send({
      status: "Authentication Successful",
      userid: "123",
      address,
    });
  } else {
    res.send({ status: "Authentication Failed", userid: "-1" });
  }
});
module.exports = router;

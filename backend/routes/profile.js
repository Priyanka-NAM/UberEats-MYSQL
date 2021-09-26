const express = require("express");

const router = express.Router();

const user = {
  id: "1",
  phoneNumber: "",
  dob: "",
  nickname: "",
  email: "abc@gmail.com",
  oldpassword: "123456",
  newpassword: "",
  addressline1: "",
  city: "",
  state: "",
  country: "",
  zipcode: "95694",
};

router.post("/customer", async (req, res) => {
  console.log("User Details from JWT ", req.userDetails);

  console.log("Request from Profile Page ", req.body);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(req.body)) {
    user[key] = value;
  }
  console.log("Updated from Profile Page ", user);
  res.send();
});

router.post("/owner", async (req, res) => {
  console.log("User Details from JWT ", req.userDetails);

  console.log("Request from Profile Page ", req.body);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(req.body)) {
    user[key] = value;
  }
  res.send({ status: "Update Success" });
});
module.exports = router;

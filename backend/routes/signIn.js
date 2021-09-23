const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
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
const user = {
  id: "1",
  email: "abc@gmail.com",
  password: "123456",
  address,
};

// router.post("/", async (req, res) => {
//   console.log(req.body);
//   if (req.body.email ==="abc@gmail.com" && req.body.password === "123456") {
//     res.send({
//       status: "Authentication Successful",
//       userid: "123",
//       address,
//     });
//   } else {
//     res.status(400).send({ status: "Authentication Failed" });
//   }
// });

router.post("/", async (req, res) => {
  const token = jwt.sign({ _id: user }, "jwtPrivateKey");
  jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
    console.log(decoded.id); // bar
  });
  if (req.body.email === user.email && req.body.password === user.password) {
    res.header("x-auth-token", token).send({
      status: "Authentication Successful",
      userid: "123",
      address,
      token,
    });
  } else {
    res.status(400).send({ status: "Authentication Failed" });
  }
});
module.exports = router;

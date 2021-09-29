const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const db = require("../dbPoolConnection");

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

// router.post("/customer", async (req, res) => {
//   console.log("User Details from JWT ", req.userDetails);

//   console.log("Request from Profile Page ", req.body);

//   // eslint-disable-next-line no-restricted-syntax
//   for (const [key, value] of Object.entries(req.body)) {
//     user[key] = value;
//   }
//   console.log("Updated from Profile Page ", user);
//   res.send();
// });

// router.post("/owner", async (req, res) => {
//   console.log("User Details from JWT ", req.userDetails);

//   console.log("Request from Profile Page ", req.body);

//   // eslint-disable-next-line no-restricted-syntax
//   for (const [key, value] of Object.entries(req.body)) {
//     user[key] = value;
//   }
//   res.send({ status: "Update Success" });
// });

router.post("/customer", async (req, res) => {
  console.log(req.body);
  const { oldpassword, newpassword } = req.body;
  const oldhashedPassword = md5(oldpassword);
  const newhashedPassword = md5(newpassword);
  const {
    id,
    email,
    name,
    nickname,
    phoneNumber,
    addressline1,
    dob,
    city,
    state,
    country,
    zipcode,
    profilepic,
  } = req.body;
  const sql = `CALL customer_update(${id},'${email}','${name}','${oldhashedPassword}','${dob}','${addressline1}','${city}','${state}','${country}','${zipcode}','${nickname}','${profilepic}',${phoneNumber});`;
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
        const token = jwt.sign({ _id: result[0][0] }, "jwtPrivateKey");
        res.header("x-auth-token", token).send({
          status: "Customer Updated",
          user: result[0][0],
          token,
        });
        return;
      }
      if (result[0][0].status === "FAILED") {
        res.status(400).send({ status: "Authentication Failed" });
      }
    }
  });
});

router.get("/customer/:user_id", (req, res) => {
  const sql = `CALL customer_get('${req.params.user_id}', NULL);`;
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error in Data");
    }
    if (result && result.length > 0 && result[0][0]) {
      res.writeHead(200, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(result[0]));
    }
  });
});

module.exports = router;

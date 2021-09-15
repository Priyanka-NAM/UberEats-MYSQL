const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  res.send("User route");
});
module.exports = router;

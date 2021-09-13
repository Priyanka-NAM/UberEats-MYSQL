const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.get("/", async (req, res) => {
  db.query("select* from ubereats", (error, rows, fields) => {
    if (error) console.log("Unable to fetch table data");
    else console.log("Able to fetch table data");
  });
});
module.exports = router;

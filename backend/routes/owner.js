const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.get("/customerdetails/:customer_id", (req, res) => {
  const sql = `CALL customer_get_id(${req.params.customer_id});`;
  console.log(sql);
  db.query(sql, (err, result) => {
    try {
      if (err) {
        throw err;
      }
      if (!result || result.length === 0) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.send({
          status: "Result from Db Undefined",
        });
        return;
      }
      if (
        result[0].length > 0 &&
        result[0][0].status === "CUSTOMER_FETCH_FAILED"
      ) {
        res.status(400).send({ status: "CUSTOMER_DETAILS_FETCH_FAILURE" });
        return;
      }
      res.send({
        status: "CUSTOMER_DETAILS",
        customerDetails: result[0][0],
      });
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

module.exports = router;

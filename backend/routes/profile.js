/* eslint-disable camelcase */
const express = require("express");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const db = require("../dbPoolConnection");

const router = express.Router();

router.post("/customer", async (req, res) => {
  console.log("Customer Profile Request", req.body);
  const { password, newpassword } = req.body;
  const oldhashedPassword = password ? md5(password) : undefined;
  const newhashedPassword = newpassword ? md5(newpassword) : undefined;
  const {
    customer_id,
    email_id,
    name,
    nick_name,
    phone_num,
    address_line_1,
    date_of_birth,
    city,
    state,
    country,
    zipcode,
    profile_pic_file_path,
  } = req.body;
  const sql = `CALL customer_update(${customer_id},"${email_id}","${name}","${oldhashedPassword}","${date_of_birth}","${address_line_1}","${city}","${state}","${country}","${zipcode}","${nick_name}","${profile_pic_file_path}",${phone_num});`;
  console.log(sql);
  db.query(sql, (err, result) => {
    try {
      if (err) {
        throw err;
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
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

router.get("/customer/:user_id", (req, res) => {
  const sql = `CALL customer_get("${req.params.user_id}", NULL);`;
  db.query(sql, (err, result) => {
    try {
      if (err) {
        throw err;
      }
      if (result && result.length > 0 && result[0][0]) {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(JSON.stringify(result[0]));
      }
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

router.post("/owner", async (req, res) => {
  console.log("Owner details from Request", req.body);
  const { oldpassword, newpassword } = req.body;
  const oldhashedPassword = oldpassword ? md5(oldpassword) : undefined;
  const newhashedPassword = newpassword ? md5(newpassword) : undefined;
  const {
    restaurant_id,
    email_id,
    name,
    image_file_path,
    phone_num,
    description,
    restaurant_address_line_one,
    restaurant_city,
    restaurant_state,
    restaurant_country,
    restaurant_zipcode,
    restaurant_start_time,
    restaurant_end_time,
    restaurant_week_start,
    restaurant_week_end,
    national_brand,
    delivery_type,
  } = req.body;
  let del_type = delivery_type;
  if (!delivery_type) {
    del_type = "Both";
  }
  const sql = `CALL restaurant_update(${restaurant_id},"${name}","${email_id}","${newhashedPassword}","${description}","${restaurant_address_line_one}","${restaurant_city}","${restaurant_state}","${restaurant_country}","${restaurant_zipcode}","${image_file_path}","${phone_num}","${restaurant_start_time}","${restaurant_end_time}","${restaurant_week_start}","${restaurant_week_end}", "${national_brand}", "${del_type}");`;
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
        result[0][0].status === "RESTAURANT_UPDATE_FAILED"
      ) {
        res.status(400).send({ status: "NO_RESTAURANT_ID" });
        return;
      }

      res.send({
        status: "Customer Updated",
        user: result[0][0],
      });
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

router.get("/owner/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_get("${req.params.restaurant_id}", "${req.body.email}");`;
  db.query(sql, (err, result) => {
    try {
      if (err) {
        throw err;
      }
      if (result && result.length > 0 && result[0][0]) {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(JSON.stringify(result[0]));
      }
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

router.get("/owner/details/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_get_id(${req.params.restaurant_id});`;
  console.log(sql);
  db.query(sql, (err, result) => {
    try {
      if (err) {
        console.log(
          "Err ==========================>>>>>>>>>>>>>>>>>>> ",
          JSON.stringify(err)
        );
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
        result[0][0].status === "RESTAURANT_ID_IS_NULL"
      ) {
        res.status(400).send({ status: "OWNER_PROFILE_DETAILS_FAILURE" });
        return;
      }
      res.send({
        status: "OWNER_PROFILE_DETAILS",
        user: result[0][0],
      });
    } catch (error) {
      console.log(
        "Err <<<<<<<<<<<<<<<<<<<<<<<<<<<<========================",
        JSON.stringify(error)
      );
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end(JSON.stringify(error));
    }
  });
});

module.exports = router;

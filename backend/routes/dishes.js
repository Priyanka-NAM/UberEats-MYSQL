const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

router.post("/updatedish", (req, res) => {
  const {
    dishId,
    restaurentId,
    dishname,
    dishdescription,
    image,
    dishcategory,
    dishtype,
    ingredients,
    price,
  } = req.body;
  const sql = `CALL dishes_update('${dishname}',${dishId},'${dishdescription}','${ingredients}','${price}','${image}','${dishcategory}',null,'${dishtype}',${restaurentId},null,null,'1');`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
    }
    if (result && result.length > 0) {
      if (result[0][0].status === "DISH_UPDATE_SUCCESS") {
        console.log("result", result);
        res.send({
          status: "DISH_UPDATE_SUCCESS",
          dishdetails: result[0][0],
        });
        return;
      }
      if (result[0][0].status === "DISH_UPDATE_FAILURE") {
        res.status(400).send({ status: "DISH_UPDATE_FAILURE" });
      }
    }
  });
});

router.post("/adddish", (req, res) => {
  const {
    restaurentId,
    dishname,
    dishdescription,
    image,

    dishcategory,
    dishtype,
    ingredients,
    price,
  } = req.body;
  const sql = `CALL dishes_put('${dishname}','${dishdescription}','${ingredients}','${price}','${image}','${dishcategory}',"",'${dishtype}',${restaurentId},"","",'1');`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
    }
    if (result && result.length > 0) {
      if (result[0][0].status === "DISH_ADDED") {
        console.log("result", result);
        res.send({
          status: "DISH_ADDED",
          dishdetails: result[0][0],
        });
        return;
      }
      if (result[0][0].status === "DISH_EXISTS") {
        res.status(400).send({ status: "DISH_EXISTS" });
      }
    }
  });
});

router.get("/alldishes/:restaurant_id", (req, res) => {
  const sql = `CALL dishes_get_restaurant(${req.params.restaurant_id});`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
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
      result[0][0].status === "DISHES_WITH_RESTAURANT_ID_NULL_NOT_FOUND"
    ) {
      res
        .status(400)
        .send({ status: "DISHES_WITH_RESTAURANT_ID_NULL_NOT_FOUND" });
      return;
    }

    res.send({
      status: "ALL_DISHES",
      allDishes: result[0],
    });
  });
});

module.exports = router;

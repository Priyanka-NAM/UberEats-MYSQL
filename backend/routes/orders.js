/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const express = require("express");
const db = require("../dbPoolConnection");

const router = express.Router();

const dishDetails = (order) => {
  return {
    dish_id: order.dish_id,
    quantity: order.quantity,
    price: order.price,
    name: order.name,
    description: order.description,
    ingredients: order.ingredients,
    image_file_path: order.image_file_path,
    category: order.category,
    cuisine_type: order.cuisine_type,
    nadish_typeme: order.dish_type,
    dish_start_time: order.dish_start_time,
    dish_end_time: order.dish_end_time,
    is_active: order.is_active,
  };
};

const OrderCustomerRestaurantDetails = (order) => {
  const orderClone = { ...order };
  [
    "dish_id",
    "quantity",
    "price",
    "name",
    "description",
    "ingredients",
    "image_file_path",
    "category",
    "cuisine_type",
    "dish_type",
    "dish_start_time",
    "dish_end_time",
    "is_active",
  ].forEach((e) => delete orderClone[e]);
  return orderClone;
};

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(dishDetails(obj));
    return acc;
  }, {});
};

const orderProcessing = (orders) => {
  const groupedByOrderIdDishes = groupBy(orders, "order_id");
  const orderMap = new Map();
  for (let i = 0; i < orders.length; i += 1) {
    const { order_id: orderId } = orders[i];
    orders[i].dishes = groupedByOrderIdDishes[orderId];
    orderMap.set(orderId, OrderCustomerRestaurantDetails(orders[i]));
  }

  const processedOrders = [];
  for (const val of orderMap.values()) {
    processedOrders.push(val);
  }
  return processedOrders;
};

router.get("/completedorders/restaurant/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_orders_get_status(${req.params.restaurant_id},'Completed');`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.send("Database Connection Error");
      return;
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

    if (result[0].length > 0 && result[0][0].status === "RESTAURANT_ID_NULL") {
      res.status(400).send({ status: "NO_RESTAURANT_ID" });
      return;
    }

    res.send({
      status: "COMPLETED_ORDERS",
      orders: orderProcessing(result[0]),
    });
  });
});
router.get("/neworders/restaurant/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_orders_get_status(${req.params.restaurant_id},'Active');`;
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

    if (result[0].length > 0 && result[0][0].status === "RESTAURANT_ID_NULL") {
      res.status(400).send({ status: "NO_RESTAURANT_ID" });
      return;
    }

    res.send({
      status: "NEW_ORDERS",
      orders: orderProcessing(result[0]),
    });
  });
});
router.get("/cancelledorders/restaurant/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_orders_get_status(${req.params.restaurant_id},'Cancelled');`;
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

    if (result[0].length > 0 && result[0][0].status === "RESTAURANT_ID_NULL") {
      res.status(400).send({ status: "NO_RESTAURANT_ID" });
      return;
    }

    res.send({
      status: "CANCELLED_ORDERS",
      orders: orderProcessing(result[0]),
    });
  });
});

router.get("/cancelledorders/customer/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_orders_get_status(${req.params.restaurant_id},'Cancelled');`;
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

    if (result[0].length > 0 && result[0][0].status === "RESTAURANT_ID_NULL") {
      res.status(400).send({ status: "NO_RESTAURANT_ID" });
      return;
    }

    res.send({
      status: "CANCELLED_ORDERS",
      orders: orderProcessing(result[0]),
    });
  });
});

router.get("/cancelledorders/customer/:restaurant_id", (req, res) => {
  const sql = `CALL restaurant_orders_get_status(${req.params.restaurant_id},'Cancelled');`;
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

    if (result[0].length > 0 && result[0][0].status === "RESTAURANT_ID_NULL") {
      res.status(400).send({ status: "NO_RESTAURANT_ID" });
      return;
    }

    res.send({
      status: "CANCELLED_ORDERS",
      orders: orderProcessing(result[0]),
    });
  });
});

module.exports = router;

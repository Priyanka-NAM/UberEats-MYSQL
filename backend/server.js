const express = require("express");
const path = require("path");

const app = require("./app");
const db = require("./dbPoolConnection");
const signin = require("./routes/signin");
const signup = require("./routes/signup");
const customerrestaurant = require("./routes/customerrestaurant");
const profile = require("./routes/profile");
const verifyToken = require("./routes/tokenVerification");
const upload = require("./routes/fileUpload");
const orders = require("./routes/orders");
const dishes = require("./routes/dishes");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use("/ubereats/signin", signin);
app.use("/ubereats/signup", signup);

app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "/public", "/uploads"))
);

app.use(verifyToken);
app.use("/ubereats/upload", upload);
app.use("/ubereats/profile", profile);
app.use("/ubereats/orders", orders);
app.use("/ubereats/dishes", dishes);
app.use("/ubereats/customerrestaurant", customerrestaurant);

module.exports = app;

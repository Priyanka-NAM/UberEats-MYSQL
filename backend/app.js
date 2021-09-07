const express = require("express");

const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Cache-Control", "no-cache");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,PATCH,POST,PUT,DELETE"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

module.exports = app;

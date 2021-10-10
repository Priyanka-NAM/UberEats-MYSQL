const configure = require("config");

const mysql = require("mysql2");
// const mysql = require("promise-mysql");

const constants = require("./config.json");

require("dotenv").config();

// const dbPoolConnection = mysql.createPool({
//   connectionLimit: 200,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASS,
//   database: "uber_eats_test",
//   insecureAuth: true,
// });

const dbPoolConnection = mysql.createPool({
  connectionLimit: 500,
  host: constants.DB.host,
  user: constants.DB.user,
  port: constants.DB.port,
  password: constants.DB.password,
  database: constants.DB.database,
  // insecureAuth: true,
});

dbPoolConnection.getConnection((error) => {
  if (error) {
    throw error;
  }
  console.log("MySql db connected....");
});

module.exports = dbPoolConnection;

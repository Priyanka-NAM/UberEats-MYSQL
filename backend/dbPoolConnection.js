const configure = require("config");

const mysql = require("mysql");
// const mysql = require("promise-mysql");

require("dotenv").config();

// if (!configure.get("jwtPrivateKey")) {
//   console.log("FATAL ERROR: jwtPrivateKet is not defined");
//   process.exit(1);
// }
// Pool supports pool of requests.

// for aws
// DB_HOST=ubereats.cgpwh4cefk7y.us-east-2.rds.amazonaws.com
// DB_USER=admin
// DB_PASS=ubereats
// DB_CONNECTIONLIMIT=500
// DB_PORT=3306

const dbPoolConnection = mysql.createPool({
  connectionLimit: 500,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: "uber_eats_test",
  insecureAuth: true,
});
dbPoolConnection.getConnection((error) => {
  if (error) {
    throw error;
  }
  console.log("MySql db connected....");
});

module.exports = dbPoolConnection;

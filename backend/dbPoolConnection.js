const configure = require("config");

const mysql = require("mysql");

require("dotenv").config();

// if (!configure.get("jwtPrivateKey")) {
//   console.log("FATAL ERROR: jwtPrivateKet is not defined");
//   process.exit(1);
// }
// Pool supports pool of requests.
const dbPoolConnection = mysql.createPool({
  connectionLimit: 500,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: "uber_eats",
});
dbPoolConnection.getConnection((error) => {
  if (error) {
    throw error;
  }
  console.log("MySql db connected....");
});

module.exports = dbPoolConnection;

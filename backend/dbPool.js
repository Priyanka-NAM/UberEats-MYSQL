const mysql = require("mysql");

require("dotenv").config();

// Pool supports pool of requests.
const dbPool = mysql.createPool({
  connectionLimit: 500,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: "ubereats",
});
dbPool.getConnection((error) => {
  if (error) {
    throw error;
  }
  console.log("MySql db connected....");
});

module.exports = dbPool;

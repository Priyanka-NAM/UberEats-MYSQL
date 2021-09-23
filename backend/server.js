const app = require("./app");
const db = require("./dbPoolConnection");
const signin = require("./routes/signin");
const signup = require("./routes/signup");
const customerrestaurant = require("./routes/customerrestaurant");
const test = require("./routes/test");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use("/", test);
app.use("/ubereats/signin", signin);
app.use("/ubereats/signup", signup);
app.use("/ubereats/customerrestaurant", customerrestaurant);

module.exports = app;

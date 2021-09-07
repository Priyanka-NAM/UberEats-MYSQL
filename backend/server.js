const app = require("./app");
const db = require("./dbPool");
const signIn = require("./routes/signIn");
const signUp = require("./routes/signUp");


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

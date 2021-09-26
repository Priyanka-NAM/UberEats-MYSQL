const jwt = require("jsonwebtoken");

const tokenKey = "jwtPrivateKey";

const verifyToken = (req, res, next) => {
  console.log("Request headers hurray cjskbfhjksfk", req.headers);
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-auth-token"] ||
    req.headers["content-type"] ||
    req.headers.authorization;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, tokenKey);
    // eslint-disable-next-line dot-notation
    req.userDetails = decoded["_id"];
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;

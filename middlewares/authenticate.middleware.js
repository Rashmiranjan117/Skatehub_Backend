var jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded_token = jwt.verify(token, 'secret');
    if (decoded_token) {
      const userId = decoded_token.userId;
      req.body.userId = userId;
      next();
    } else {
      res.status(401).send("Please Login First");
    }
  } else {
    res.status(404).send("Invalid Token");
  }
};

module.exports = { authenticate };
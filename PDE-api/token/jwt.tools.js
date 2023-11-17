const jwt = require("jsonwebtoken");
require("dotenv").config();

//Variables de entorno
const unknown = process.env.SECRET_TOKEN;
const expiredTime = process.env.TOKEN_EXPIRATION;

const tools = {};

tools.createToken = (_id) => {
  return jwt.sign({ userId: _id }, unknown, { expiresIn: expiredTime });
}

tools.verifyToken = (token) => {
  try {
    return jwt.verify(token, unknown);
  } catch {
    return false;
  }
}

module.exports = tools;
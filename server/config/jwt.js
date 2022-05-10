const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
bcrypt = require("bcrypt");
const { User } = require("../models/user.model");

module.exports.secret = secret;

module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
};

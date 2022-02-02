const mongoose = require('mongoose'),

const jwt = require("jsonwebtoken");
const secret = 'imasecret';
bcrypt = require('bcrypt');
const {User} = require('../models/user.model')



module.exports.secret = secret;

module.exports.authenticate =(req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.secret, (err, payload) => {

    })
}


'use strict';

  

exports.register = function(req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
  });
};

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Unauthorized user!!' });
  }
};
exports.profile = function(req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  } 
  else {
   return res.status(401).json({ message: 'Invalid token' });
  }
};






// const payload = {
//     id: user._id
//   };
   
//   // notice that we're using the SECRET_KEY from our .env file
//   const userToken = jwt.sign(payload, process.env.SECRET_KEY);
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController {
  registerUser = (req, res) => {
    User.find({ email: req.body.email })
      .then((userEmail) => {
        console.log("Res finding user =>> ", userEmail);
        if (userEmail.length === 0) {
          User.create(req.body)
            .then((user) => {
              const userToken = jwt.sign(
                {
                  id: user._id,
                },
                process.env.SECRET_KEY
              );
              res
                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                  httpOnly: true,
                })
                .json({ msg: "success!", user: user });
            })
            .catch((err) => res.json(err));
        } else {
          res.json({
            errors: { email: { message: "Email is already taken" } },
          });
        }
      })
      .catch((err) => console.log("Error with find ", err));
  };

  // FIND ALL
  findAllUsers = (req, res) => {
    User.find()
      .then((allUsers) => res.json({ result: allUsers }))
      .catch((err) =>
        res.json({ message: "Something went wrong with fin all", error: err })
      );
  };

  // login to app
  login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.json({ error: "Email not found, please try again" });
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      return res.json({ error: "Password incorrect, try again" });
    }
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    );

    res
      .cookie("usertoken", userToken, process.env.SECRET_KEY, {
        httpOnly: true,
      })
      .json({ msg: "success!" });
  };

  // all my made users token is id not _id but their id is still _id

  // GET ONE LOGGED IN USER
  getOneLoggedInUser = (req, res) => {
    // console.log(req)
    // use cookie to get single user
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    // decodedJWT.payload.id
    User.findById(decodedJWT.payload.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  };

  // LOGOUT
  logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  };
}

module.exports = new UserController();

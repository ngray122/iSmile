const mongoose = require("mongoose");

// vailidates unique email
const uniqueValidator = require("mongoose-unique-validator");
require("mongoose-type-email");

// to hash a password going to the db
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name cannot be left blank"],
      minlength: [3, "First name must have at least 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name cannot be left blank"],
      minlength: [3, "Last Name must have at least 3 characters"],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      correctTld: [true, "Email is not vaild"],
      required: [true, "Email is not valid"],
      minlength: [5, "Email must have at least 5 characters"],
      unique: [true, "This email is already in use, please choose another"],
    },
    password: {
      type: String,
      required: [true, "Password cannot be blank"],
      minlength: [6, "Password must have at least 6 characters"],
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.virtual("verifyPassword")
  // .get is a function that returns verifyPassword from form input
  .get(() => this.verifyPassword)
  .set((value) => (this.verifyPassword = value));

// middleware - between the FE and back
// .pre do this function BEFORE you send to db. (next)==>peform next step
UserSchema.pre("validate", function (next) {
  if (this.password !== this.verifyPassword) {
    this.invalidate("verifyPassword", "Password must match confirm password");
  }
  // Perform the next step
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => {
      console.log("PASSWORD HASH ERROR ===> ", err);
      next();
    });
});

UserSchema.plugin(uniqueValidator, {
  message: "Email address is already in use, please choose another",
});

module.exports.User = mongoose.model("User", UserSchema);

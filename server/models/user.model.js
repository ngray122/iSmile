const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
require("mongoose-type-email");

const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name cannot be left blank"],
      minlength: [1, "First name must have at least 1 character"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name cannot be left blank"],
      minlength: [1, "Last Name must have at least 1 character"],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      correctTld: [true, "Email is not in a valid format"],
      required: [true, "Email cannot be left blank"],
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

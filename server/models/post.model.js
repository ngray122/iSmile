const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be left blank"],
      minlength: [3, "Name must conatain at least 3 characters"],
      maxlength: [20, "Name cannot contain more 20 characters"],
    },

    text: {
      type: String,
      required: [true, "Message cannot be left blank"],
      minlength: [5, "Message must conatain at least 5 characters"],
      maxlength: [500, "Message cannot contain more than 500 characters"],
    },
    url: {
      type: String,
    },
    // add mb upload requirement?
    photo: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// PostSchema.virtual('verifyPassword')
// // .get is a function that returns verifyPassword from form input
//     .get(() => this.verifyPassword)
//     .set(value => this.verifyPassword = value);

// // middleware - between the FE and back
// // .pre do this function BEFORE you send to db. (next)==>peform next step
// PostSchema.pre('validate', function (next) {
//     if (this.password !== this.verifyPassword) {
//         this.invalidate('verifyPassword', 'Password must match confirm password');
//     }
//     // Perform the next step
//     next();
// });

// PostSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         })
//         .catch(err => {
//             console.log("PASSWORD HASH ERROR ===> ", err)
//             next();
//         });
// });

// PostSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   }

// PostSchema.plugin(uniqueValidator, {
//   message: "Email address is already in use, please choose another",
// });

module.exports.Post = mongoose.model("Post", PostSchema);

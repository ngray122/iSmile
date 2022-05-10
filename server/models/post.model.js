const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be left blank"],
      minlength: [3, "Name must contain at least 3 characters"],
      maxlength: [60, "Name cannot contain more 60 characters"],
    },

    text: {
      type: String,
      required: [true, "Message cannot be left blank"],
      minlength: [5, "Message must contain at least 5 characters"],
      maxlength: [800, "Message cannot contain more than 800 characters"],
    },
    url: {
      type: String,
    },
    photo: {
      type: String,
      required: [true, "Photo cannot be left blank"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports.Post = mongoose.model("Post", PostSchema);

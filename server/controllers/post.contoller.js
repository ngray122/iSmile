const { Post } = require("../models/post.model");

class PostController {
  createPost = (req, res) => {
    const newPost = {
      ...req.body,
      photo: req.file,
    };
    Post.create(req.body)
      .then((newPost) => {
        res.json({ result: newPost });
      })
      .catch((err) => {
        res.json({ error: err });
      });
  };

  updatePost = (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((post) => res.json({ result: post }))
      .catch((err) =>
        res.json({ message: "ERROR with update ===> ", error: err })
      );
  };

  findAllPosts = (req, res) => {
    Post.find()
      .populate("user_id")
      .then((allPosts) => res.json({ result: allPosts }))
      .catch((err) =>
        res.json({ message: "ERROR with find all ===> ", error: err })
      );
  };

  findOnePost = (req, res) => {
    // id in API is _id
    Post.findOne({ _id: req.params.id })
      .then((onePost) => res.json({ result: onePost }))
      .catch((err) =>
        res.json({ message: "ERROR with find one ===> ", error: err })
      );
  };

  deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
      .then((deletePost) => res.json({ result: deletePost }))
      .catch((err) =>
        res.json({ message: "ERROR with delete ===> ", error: err })
      );
  };

  // post belonging to user
  // req.params.userId is url
  findPostFromUser = (req, res) => {
    Post.find({ user_id: req.params.userId })
      .populate("user_id")
      .then((allPosts) => res.json({ result: allPosts }))
      .catch((err) =>
        res.json({ message: "ERROR with find all ===> ", error: err })
      );
  };
}

module.exports = new PostController();

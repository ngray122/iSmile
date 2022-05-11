const PostController = require("./controllers/post.contoller");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    callback(null, uuidv4() + "-" + fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fieldSize: 25 * 1024 * 1024 },
});

module.exports = (app) => {
  app.post(
    "/api/posts/create",
    upload.single("photo"),
    PostController.createPost
  );

  app.get("/api/posts/getall", PostController.findAllPosts);

  app.get("/api/posts/getone/:id", PostController.findOnePost);

  app.put(
    "/api/posts/edit/:id",
    upload.single("photo"),
    PostController.updatePost
  );

  app.delete("/api/posts/delete/:id", PostController.deletePost);

  app.get("/api/posts/user/:userId", PostController.findPostFromUser);
};

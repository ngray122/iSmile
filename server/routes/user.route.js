const UserController = require("../controllers/User.controller");

module.exports = (app) => {
  app.post("/api/user/register", UserController.registerUser);
  app.post("/api/user/login", UserController.login);
  app.get("/api/user/getall", UserController.findAllUsers);
  app.get("/api/user/getone", UserController.getOneLoggedInUser);

  app.get("/api/user/logout", UserController.logout);
};

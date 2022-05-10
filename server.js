const express = require("express");
const cors = require("cors");

require("dotenv").config();

const cookieParser = require("cookie-parser");

const app = express();

const port = process.env.PORT;

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
const cookies = require("cookie-parser");
app.use(cookieParser());

app.use(express.static("uploads"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

var fs = require("fs");
var path = require("path");
require("dotenv/config");

require("./server/config/config");

require("./server/routes/user.route")(app);
require("./server/routes/post.route")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./", "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
app.listen(port, () => console.log(`Listening on port ${port}`));

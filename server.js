const express = require("express");
const cors = require("cors");

// information stored in env
require("dotenv").config();
// console.log("my secret ky ===>", process.env.SECRET_KEY)
const cookieParser = require("cookie-parser");

// app is instance of express
const app = express();

const port = 8000;

// parse json
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
const cookies = require("cookie-parser");
app.use(cookieParser());

// tells the server where to upload images
app.use(express.static("uploads"));
app.use(
  cors(
    // accept information from =>
    { credentials: true, origin: "http://localhost:3000" }
  )
);

var fs = require("fs");
var path = require("path");
require("dotenv/config");

// mongoose config
require("./server/config/config");

// routes for <==(app)
require("./server/routes/user.route")(app);
require("./server/routes/post.route")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

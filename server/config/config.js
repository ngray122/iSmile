const mongoose = require("mongoose");

const db_name = process.env.DB_NAME;

mongoose
  .connect(
    `mongodb+srv://ngray122:root@cluster0.tewol.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );

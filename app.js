const express = require("express");

const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb://127.0.0.1:27017/local", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database not Connected", error);
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



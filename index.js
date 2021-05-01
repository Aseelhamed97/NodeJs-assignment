const express = require("express");
const customerController = require("./controller/customerController");
const mongoose = require("mongoose");
const Flight = require("./models/Flight");

const conn = mongoose.connect("mongodb://localhost:27017/customer", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

console.log(`MongoDB Connected}`);

let app = express();

app.use("/", customerController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

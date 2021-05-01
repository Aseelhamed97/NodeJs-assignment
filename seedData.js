const fs = require("fs");
const mongoose = require("mongoose");

// Load Models
const Seat_reservation = require("./models/Seat_reservation.js");

// Connect to Mongo Database
const connectDatabase = async () => {
  const conn = await mongoose.connect("mongodb://localhost:27017/customer", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

// Read The JSON files
const Seat_reservations = JSON.parse(
  fs.readFileSync(`${__dirname}/seedData/Seat_reservation.json`, "utf-8")
);
// Import Sample Data In DB
const importData = async () => {
  try {
    await Seat_reservation.create(Seat_reservations);
    console.log(`Data successfully imported`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

importData();

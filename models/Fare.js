const mongoose = require("mongoose");
const Seat_reservation = require("./Seat_reservation");

const FareSchema = new mongoose.Schema(
  {
    flight_number: { type: String, require: true },
    fare_code: { type: String, require: true },
    amount: { type: Number, require: true },
    restrictions: { type: String, require: true },
  },
  { collection: "Fare" }
);

module.exports = mongoose.model("Fare", FareSchema);

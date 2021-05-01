const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    Flight_number: { type: String, require: true },
    Airline: { type: String, require: true },
    Weekdays: { type: String, require: true },
  },
  { collection: "Flight" }
);

module.exports = mongoose.model("Flight", FlightSchema);

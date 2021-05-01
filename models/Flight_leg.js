const mongoose = require("mongoose");

const Flight_legSchema = new mongoose.Schema(
  {
    flight_number: { type: String, require: true },
    leg_number: { type: Number, require: true },
    departure_airport_code: { type: String, require: true },
    scheduled_departure_time: { type: String, require: true },
    arrival_airport_code: { type: String, require: true },
    scheduled_arrival_time: { type: String, require: true },
  },
  { collection: "Flight_leg" }
);

module.exports = mongoose.model("Flight_leg", Flight_legSchema);

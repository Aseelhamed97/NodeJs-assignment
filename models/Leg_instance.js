const mongoose = require("mongoose");

const Leg_instanceSchema = new mongoose.Schema(
  {
    flight_number: { type: String, require: true },
    leg_number: { type: Number, require: true },
    date: { type: String, require: true },
    number_of_available_seats: { type: Number, require: true },
    airplane_id: { type: Number, require: true },
    departure_airport_code: { type: String, require: true },
    departure_time: { type: String, require: true },
    arrival_airport_code: { type: String, require: true },
    arrival_time: { type: String, require: true },
  },
  { collection: "Leg_instance " }
);

module.exports = mongoose.model("Leg_instance ", Leg_instanceSchema);

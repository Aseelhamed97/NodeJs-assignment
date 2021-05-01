const mongoose = require("mongoose");

const Seat_reservationSchema = new mongoose.Schema(
  {
    flight_number: { type: String },
    leg_number: { type: Number, require: true },
    date: { type: String, require: true },
    seat_number: { type: String, require: true },
    customer_name: { type: String, require: true },
    customer_phone: { type: String, require: true },
  },
  { collection: "Seat_reservation" }
);

module.exports = mongoose.model("Seat_reservation", Seat_reservationSchema);

const mongoose = require("mongoose");

const AirplaneSchema = new mongoose.Schema(
  {
    airplane_id: { type: Number, require: true },
    total_number_of_seats: { type: Number, require: true },
    airplane_type: { type: String, require: true },
  },
  { collection: "Airplane" }
);

module.exports = mongoose.model("Airplane", AirplaneSchema);

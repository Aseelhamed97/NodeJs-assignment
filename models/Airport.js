const mongoose = require("mongoose");

const AirportSchema = new mongoose.Schema(
  {
    airport_code: { type: String, require: true },
    name: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String, require: true },
  },
  { collection: "Airport" }
);

module.exports = mongoose.model("Airport", AirportSchema);

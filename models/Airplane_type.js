const mongoose = require("mongoose");

const Airplane_typeSchema = new mongoose.Schema(
  {
    airplane_type_name: { type: String, require: true },
    max_seats: { type: Number, require: true },
    company: { type: String, require: true },
  },
  { collection: "Airplane_type" }
);

module.exports = mongoose.model("Airplane_type", Airplane_typeSchema);

const mongoose = require("mongoose");

const Can_landSchema = new mongoose.Schema(
  {
    airplane_type_name: { type: String, require: true },
    airport_code: { type: String, require: true },
  },
  { collection: "Can_land" }
);

module.exports = mongoose.model("Can_land", Can_landSchema);

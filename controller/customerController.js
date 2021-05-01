const express = require("express");
const router = express.Router();
const flightCont = require("./testController");

// http://localhost:5000/flights
router.route("/flights").get(flightCont.getFlights);
// http://localhost:5000/flights/DL1149
router.route("/flights/:number").get(flightCont.getFlightByNumber);
// http://localhost:5000/fares
router.route("/fares").get(flightCont.getFares);
// http://localhost:5000/reservations
router.route("/reservations").get(flightCont.getReservations);
// http://localhost:5000/invoice/Osvaldo
router.route("/invoice/:CustomerName").get(flightCont.getInvoices);

module.exports = router;

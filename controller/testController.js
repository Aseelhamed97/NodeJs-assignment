const Flight = require("../models/Flight");
const Fare = require("../models/Fare");
const Reservation = require("../models/Seat_reservation");
const mongoose = require("mongoose");

exports.getFlights = async (req, res) => {
  try {
    const flight = await Flight.find({});
    res.json({
      status: 200,
      number_of_result: flight.length,
      fights: flight,
    });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
};

exports.getFlightByNumber = async (req, res) => {
  const FlightNumber = req.params.number;
  const flightByNum = await Flight.find({ Flight_number: FlightNumber });

  if (flightByNum) {
    res.json({
      status: 200,
      number_of_result: flightByNum.length,
      flights: flightByNum,
    });
  } else {
    res.json({ message: "flight not found" });
  }
};

exports.getFares = async (req, res) => {
  try {
    const fare = await Fare.find(
      {},
      { flight_number: 1, fare_code: 1, amount: 1 }
    );
    res.json({
      status: 200,
      number_of_result: fare.length,
      flights: fare,
    });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservation = await Reservation.find(
      {},
      {
        flight_number: 1,
        date: 1,
        seat_number: 1,
        customer_name: 1,
      }
    );
    res.json({
      status: 200,
      number_of_result: reservation.length,
      flights: reservation,
    });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
};
let i = 0;
let arraycustomer = [];
exports.getInvoices = async (req, res) => {
  try {
    const customername = req.params.CustomerName;
    const filterReservation = await Reservation.find(
      { customer_name: customername },
      {
        flight_number: 1,
        date: 1,
      }
    );

    const index = 0;
    console.log("fgrg");

    let customer = filterReservation.reduce(getSum,0);
    console.log("aseeel");
    console.log(customer);


    
    // for (let i = 0; i < filterReservation.length; i++) {
    //   const num = filterReservation[i].flight_number;
    //   const filterFare = await Fare.find(
    //     { flight_number: num },
    //     {
    //       fare_code: 1,
    //       amount: 1,
    //     }
    //   );

    //   const datecustomer = filterReservation[i].date;
    //   const fareCode = filterFare[index].fare_code;
    //   const price = filterFare[index].amount;

    //   const objcustomer = {
    //     flight_number: num,
    //     date: datecustomer,
    //     fare_code: fareCode,
    //     price: price,
    //   };
    // arraycustomer[i] = filterReservation.reduce(getSum,0);;
    // }

    res.json({
      flights: customer,
    });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
};

async function getSum(arraycustomer, ReservationObject) {
  console.log("asl");
  const num = ReservationObject.flight_number;
  console.log(num);

  const filterFare = await Fare.find(
    { flight_number: num },
    {
      fare_code: 1,
      amount: 1,
    }
  );
  const datecustomer = ReservationObject.date;
  const fareCode = filterFare[0].fare_code;
  const price = filterFare[0].amount;

  const objcustomer = {
    flight_number: num,
    date: datecustomer,
    fare_code: fareCode,
    price: price,
  };

  arraycustomer[i]=objcustomer;
  i++;

  return arraycustomer;
}


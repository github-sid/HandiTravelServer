const express = require("express");
const app = express();
const mongoose = require("mongoose");
const flightSchema = require("../model/singleFlight");
const singleFight = require("./singleFlights");

const URL =
  "mongodb+srv://sharm591:Rankin%402023@cluster0.sbczo2p.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const addData = async () => {

  await flightSchema.deleteMany({});
  singleFight.forEach(async (element) => {
    const sendData = new flightSchema({
      airlines: element.airlines,
      ammenities: element.ammenities,
      arrival: element.arrival,
      arrivalTime: element.arrivalTime,
      cost: element.cost,
      departure: element.departure,
      departureTime: element.departureTime,
      duration: element.duration,
    });

    await sendData.save().then(()=>{
      console.log('Done');
    }).catch(err=>{

      console.log(err)
    });
  });
};

//addData();

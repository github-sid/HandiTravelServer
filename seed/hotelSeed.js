//Self contained file for seed data

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hotelSchema = require("../model/hotels");
const seedData = require("./data");

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

const hotelSeed = async () => {
   await hotelSchema.deleteMany({});
  for (let i = 0; i < seedData.length; i++) {
    console.log(i);
    const seedInsert = new hotelSchema({
      accomodations: seedData[i].Accomodations,
      price: seedData[i].price,
      ammenities: seedData[i].Ammenities,
      location: seedData[i].Location,
      links: seedData[i].Links,
    });

    await seedInsert.save();
  }
};

hotelSeed();

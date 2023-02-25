const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  accomodations: String,
  bestPrice: Number,
  price1: Number,
  price2: Number,
  price3: Number,
  ammenities: String,
  location: String,
  links: String,
  country: String,
  type: String,
});

module.exports = mongoose.model("hotel", hotelSchema);

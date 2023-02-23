const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  accomodations: String,
  price: Number,
  ammenities: String,
  location: String,
  links: String,
});

module.exports = mongoose.model("hotel", hotelSchema);

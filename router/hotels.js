const express = require("express");
const hotel = require("../../../HandiTravel/models/hotel");
const router = express.Router();
const hotelModel = require("../model/hotels");

router.get("/hotel", async (req, res) => {
  const hotelData = await hotelModel.find({});

  res.send(hotelData);
});

module.exports = router;

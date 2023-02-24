const express = require("express");
const hotel = require("../../../HandiTravel/models/hotel");
const router = express.Router();
const hotelModel = require("../model/hotels");

router.get("/hotel", async (req, res) => {
  const q = req.query;
  const budget = Number(req.query.budget);
  const queryAmenities = req.query.disability;
  console.log(queryAmenities);
  const mongoQuery = { bestPrice: { $lte: budget } };

  const hotelData = await hotelModel.find(mongoQuery);
  const finalData = [];

  hotelData.forEach((element) => {
    let match = 0;
    queryAmenities.forEach((amenity) => {
      if (element.ammenities.includes(amenity)) {
        match++;
      }
    });

    if (match == queryAmenities.length) {
      finalData.push(element);
    }
  });
  res.send(finalData);
});

module.exports = router;

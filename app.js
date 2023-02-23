console.log("HandiTravel Server....");

const express = require("express");
const app = express();
const mongoose = require("mongoose");


const url =
  "mongodb+srv://sharm591:Rankin%402023@cluster0.sbczo2p.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
});


app.use(require("./router/hotels"));


app.listen(2023, () => {
  console.log("Port 2023");
});



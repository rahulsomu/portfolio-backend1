const express = require("express");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(contactRoute);
mongoose.connect(process.env.MONGODB_URL);
app.use("/", (req, res) => {
  res.send("Rahul Rana");
});

app.listen(5000, () => {
  console.log(`Running on port 5000`);
});

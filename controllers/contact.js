const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const contactFormModel = require("../models/contactForm");

exports.contactController = async (req, res) => {
  const userMessage = req.body;
  const newUserMsg = new contactFormModel(userMessage);
  await newUserMsg.save();
  res.json(userMessage);
  // MongoClient.connect(
  //   `mongodb+srv://rahulrana:rahul%40123@cluster0.5p67ahb.mongodb.net/Portfolio`
  // )
  //   .then((res) => {
  //     console.log(res.db());
  //     res.db().collection("Contact").insertOne(res.body);

  //   console.log(
  //     `Thanks ${req.body.name} , Your message is sent successfully👍`
  //   );
  // })
  // .catch((err) => console.log(err));
};

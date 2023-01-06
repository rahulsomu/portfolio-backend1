const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactFormModel = mongoose.model("Contact Details", contactFormSchema);
module.exports = contactFormModel;

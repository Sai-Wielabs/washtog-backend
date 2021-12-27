const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customPackage = new Schema({
  imageUrl: String,
  videoUrl : String,
  title: {
    type: String,
    required: true,
  },
  servicesOffered: {
    type: Array,
    required: true,
  },

});

const CustomPackage = mongoose.model(
  "CustomPackage",
  customPackage
);

module.exports = CustomPackage;

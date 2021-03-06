const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mainServiceSchema = new Schema({
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

const MainServicesSchema = mongoose.model(
  "MainServicesSchema",
  mainServiceSchema
);

module.exports = MainServicesSchema;

const { array } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customPackagesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    requried: true,
  },
  houseCondition: {
    type: Array,
    required: true,
  },
  description: {
    type: Map,
    required: true,
  },

  typeOfHouse: {
    type: Array,
    required: true,
  },
  area: {
    type: Array,
    required: true,
  },
 
});

const CustomPackagesSchema = mongoose.model(
  "CustomPackagesCollection",
  customPackagesSchema
);
module.exports = CustomPackagesSchema;

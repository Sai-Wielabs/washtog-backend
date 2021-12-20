const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deepCleaningCollection = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    requried: true,
  },
  house_condition: {
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
  addons: {
    type: Array,
    required: true,
  },
});

const DeepCleaningCollection = mongoose.model(
  "DeepCleaningCollection",
  deepCleaningCollection
);
module.exports = DeepCleaningCollection;

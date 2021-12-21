const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const packages= new Schema({
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

const CustomPackage = mongoose.model(
  "CustomPackagesCollection",
  packages
);
module.exports = CustomPackage;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bathroomDeepCleaning= new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    requried: true,
  },
  videoUrl : String,
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

const BathroomDeepCleaning = mongoose.model(
  "bathroomDeepCleaning",
  bathroomDeepCleaning
);
module.exports = BathroomDeepCleaning;

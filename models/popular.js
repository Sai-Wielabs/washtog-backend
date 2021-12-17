const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const popularItemsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  discount : String,
});

 
const PopularItems = mongoose.model("PopularItems", popularItemsSchema);
module.exports = PopularItems;


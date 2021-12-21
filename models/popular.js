const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const popularItemsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  discount: {
    type:String,
    required : true,
  },
  serviceId: {
    type: String,
    required: true,
  },
});

const PopularItems = mongoose.model("PopularItems", popularItemsSchema);
module.exports = PopularItems;

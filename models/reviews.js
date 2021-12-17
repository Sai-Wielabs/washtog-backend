const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  title: {
    required: true,
    minlength: 1,
    type: String,
  },
  description: {
    type: String,
    minlength: 1,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  imgUrl: String,
  postedBy: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const ReviewsCollection = mongoose.model("reviewsCollection", reviewsSchema);

module.exports = ReviewsCollection;

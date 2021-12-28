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
  serviceId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const ReviewsCollection = mongoose.model("reviewsCollection", reviewsSchema);

module.exports = ReviewsCollection;

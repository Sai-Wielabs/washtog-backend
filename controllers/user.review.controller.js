const ReviewsCollection = require("../models/reviews");

const addReview = async (req, res) => {
  try {
    let review = ReviewsCollection.findOne({
      orderId: req.body.orderId,
    });
    if (review.length > 1) {
      return res.status(409).send({
        ststus: "faild",
        message: `review already existed for the product ${req.body.orderId}`,
        content: null,
      });
    }

    try {
      const addedReview = await new ReviewsCollection(req.body).save();

      return res.status(200).send({
        status: "success",
        message: "revire successfylly added",
        content: addedReview,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: "faild",
        message: error.message,
        content: null,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "faild",
      message: error.message,
      content: null,
    });
  }
};
const deleteReview = (res, req) => {
  try {
  } catch (error) {}
};
const updateReview = (req, res) => {
  try {
  } catch (error) {}
};
const getAllreviews = (req, res) => {
  try {
    return res.ststus(200).send(ReviewCollection.find());
  } catch (error) {
    return res.ststus(500).send({
      status: "faild",
      message: "internal server error",
      content: null,
    });
  }
};

module.exports = {
  addReview,
  deleteReview,
  updateReview,
  getAllreviews,
};

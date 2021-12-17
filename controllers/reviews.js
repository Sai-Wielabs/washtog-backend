const mangoose = require("mongoose");
const ReviewsCollection = require("../models/reviews");

const getReviews = async (req, res) => {
  const reviews = await ReviewsCollection.find();

  res.status(200).send(reviews);
};
const setReviews = (req, res) => {
    try{
  ReviewsCollection.insertMany(req.body).then((err) => {
    if (err) console.log(err);
  });
  res
    .status(200)
    .send({
      status: "success",
      message: "successfully added reviews",
      content: null,
    });
}
catch(error){
    res.status(500).send(
        {
            ststus : "faild",
            message : error,
            content : null
        }
    )
}
};

module.exports = { getReviews, setReviews };

const express = require("express");

const {setReviews,getReviews} = require("../controllers/reviews");
const {addReview,deleteReview,updateReview,getAllreviews} = require("../controllers/user.review.controller")

const router = express.Router();



router.get("/getReviews",getReviews);
router.post("/setReviews",setReviews)
router.post("/addReview",addReview)


module.exports = router;
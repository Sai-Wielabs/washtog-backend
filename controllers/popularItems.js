const mongoose = require("mongoose");
const PopularItems = require("../models/popular");

const getPopularItems = async (req, res) => {
  try {
      const newPopularItem = new PopularItems({
          "title":"Updated Item",
          "image":"random imag url",
          "discount" : "30 %"
      }).save();
      
    const populatItems = await PopularItems.find();

    console.log(populatItems);
    return res.status(200).send({
      status: "success",
      message: "popular items fetched successfully",
      content: populatItems,
    });
  } catch (error) {
    return res.status(500).send({
      ststus: "failed",
      message:
        "failed to fetch popular items at this time please try after some time",
      content: null,
    });
  }
};
module.exports = getPopularItems;

const mongoose = require("mongoose");
const PopularItems = require("../models/popular");

const getPopularItems = async (req, res) => {
  try {
    const populatItems = await PopularItems.find();


    return res.status(200).send(populatItems);
  } catch (error) {
    return res.status(500).send({
      ststus: "failed",
      message:
        "failed to fetch popular items at this time please try after some time",
      content: null,
    });
  }
};
const addPopularItem = async (req, res) => {
  console.log(req.body);
  try {
    try {
      const addedService = await new PopularItems(req.body).save();
      if (addedService) {
        return res.status(200).send({
          status: "Ok",
          message: "Successfully added a Popular Service",
          content: addedService,
        });
      } else {
        return res.status(400).send({
          status: "Cannot Add Item",
          message: error.message,
          content: null,
        });
      }
    } catch (error) {
      return res.status(400).send({
        status: "Failed",
        message: error.message,
        content: null,
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: "Failed",
      message: error.message,
      content: null,
    });
  }
};
module.exports = { getPopularItems, addPopularItem };

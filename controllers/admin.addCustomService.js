const mongoose = require("mongoose");
const CustomPackage = require("../models/Services/main.customPackage");

const addCustomPackage = async (req, res) => {
  try {
    const newCustomPackage = await new CustomPackage(req.body).save();
    if (newCustomPackage) {
        console.log(newCustomPackage);
      res.status(200).send({
        status: "OK",
        message: "Successfully added a new custom Service",
        content: newCustomPackage,
      });
    } else {
      res.status(400).send({
        status: "Failed",
        message: "Something went wrong !",
      });
    }
  } catch (error) {
    res.status(400).send({
        status: error.message,
        message: "Internal Server Error",
      });
  }
};

module.exports = addCustomPackage;

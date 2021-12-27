const mongoose = require("mongoose");
const CustomPackage = require("../models/Services/main.customPackage");
const BathroomDeepCleaning = require("../models/Services/bathroomDeepCleaning");
const FloorScrubbingSchema = require("../models/Services/floorScrubbing");


const { response } = require("../app");


const addCustomSubService = async (req, res) => {

  
  try {
    const customPackage = await CustomPackage.findById("61c98d2ffa8a5f511c3b561f");
    const subService = await new BathroomDeepCleaning(req.body).save();
    console.log(subService);
    customPackage["servicesOffered"] = [...customPackage.servicesOffered,subService["_id"]]
    customPackage.save();
    if (customPackage) {
      res.status(200).send({
        status: "OK",
        message: "Successfully added a new custom Service",
        content: customPackage,
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

module.exports = addCustomSubService;

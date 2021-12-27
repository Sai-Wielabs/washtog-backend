const CustomPackage = require("../models/Services/main.customPackage");
const BathroomDeepCleaning = require("../models/Services/bathroomDeepCleaning");

const getCustomPackagesSubService = async (req, res) => {
  console.log(req.query);
  try {
    const mainServiceId = req.query["serviceId"];

    if (await CustomPackage.findById(mainServiceId)) {
      const mainService = await CustomPackage.findById(mainServiceId);
      const subServices = await BathroomDeepCleaning.find({
        _id: {
          $in: mainService["servicesOffered"],
        },
      });
      if (subServices) {
        res.status(200).send({
          status: "OK",
          message: "Successfully Fetched a Subservcie",
          content: subServices,
        });
      } else {
        res.status(400).send({
          status: "Faild",
          message: "Cannot find a Service",
          content: null,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      status: "Faild",
      message: error.message,
      content: null,
    });
  }
};

module.exports = getCustomPackagesSubService;

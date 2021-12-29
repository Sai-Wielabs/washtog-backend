const SoftToysDryCleaningSchema = require("../../models/Services/DryCleaning/soft_dry_cleaning");
const CustomPackage = require("../../models/Services/main.customPackage");

const addSoftToysDryCleaning = async (req, res) => {
  try {
    //console.log(req.body);

    const softToysdryCleaningSchema = await new SoftToysDryCleaningSchema(req.body).save();
    if (softToysdryCleaningSchema) {
        const previousServices = await CustomPackage.findById("61c98d71fa8a5f511c3b5625");
        console.log(previousServices)
      const updatedSoftToysDryCleaningSchema = await CustomPackage.findByIdAndUpdate(
        "61c98d71fa8a5f511c3b5625" ,{
            "servicesOffered" : [...previousServices["servicesOffered"],softToysdryCleaningSchema["_id"]],
        }
      );

      res.status(200).send({
        status: "OK",
        message: "Dry cleaning",
        content: updatedSoftToysDryCleaningSchema,
      });
    } else {
      res.status(404).send({
        status: "Not Found",
        message: "Dry cleaning cannot be created",
        content: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "Internal Server Error",
      message: error.message,
      content: null,
    });
  }
};
const getSoftToysDryCleaning = async (req, res) => {
  try {
    const softToysdryCleaningSchema = await SoftToysDryCleaningSchema.find();
    if (softToysdryCleaningSchema) {
      res.status(200).send({
        status: "OK",
        message: "Dry cleaning",
        content: softToysdryCleaningSchema,
      });
    } else {
      res.status(404).send({
        status: "Not Found",
        message: "Dry cleaning cannot be created",
        content: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "Internal Server Error",
      message: error.message,
      content: null,
    });
  }
};

module.exports = { addSoftToysDryCleaning, getSoftToysDryCleaning };

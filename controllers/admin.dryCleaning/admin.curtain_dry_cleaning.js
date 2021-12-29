const CurtainDryCleaningSchema = require("../../models/Services/DryCleaning/curtain_dry_cleaning");
const CustomPackage = require("../../models/Services/main.customPackage");

const addCurtainDryCleaning = async (req, res) => {
  try {
    //console.log(req.body);

    const dryCleaningSchema = await new CurtainDryCleaningSchema(req.body).save();
    if (dryCleaningSchema) {
        const previousServices = await CustomPackage.findById("61c98d71fa8a5f511c3b5625");
        console.log(previousServices)
      const updatedDryCleaningSchema = await CustomPackage.findByIdAndUpdate(
        "61c98d71fa8a5f511c3b5625" ,{
            "servicesOffered" : [...previousServices["servicesOffered"],dryCleaningSchema["_id"]],
        }
      );

      res.status(200).send({
        status: "OK",
        message: "Dry cleaning",
        content: updatedDryCleaningSchema,
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
const getCurtainDryCleaning = async (req, res) => {
  try {
     CustomPackage.findById(req.params.id);
    const dryCleaningSchema = await CurtainDryCleaningSchema.find();
    if (dryCleaningSchema) {
      res.status(200).send({
        status: "OK",
        message: "Dry cleaning",
        content: dryCleaningSchema,
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

module.exports = { addCurtainDryCleaning, getCurtainDryCleaning };

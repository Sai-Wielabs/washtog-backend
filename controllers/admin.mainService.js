const MainServicesSchema = require("../models/Services/mainServices");
const CustomPackagesSchema = require("../models/services/customPackages");

const addMainService = async (req, res) => {
  const addedSub = await new CustomPackagesSchema(
    req.body.servicesOffered[0]
  ).save();
  try {
    const isExist = await MainServicesSchema.findOne({ id: req.body.id });
    if (!isExist) {
      req.body.servicesOffered = [addedSub._id];

      const addedService = await new MainServicesSchema(req.body).save();
      console.log(addedService);

      return res.status(200).send({
        status: "success",
        message: "successfully added a service",
        content: "",
      });
    } else {
      return res.status(409).send({
        ststus: "success",
        message: "service already existed",
        content: null,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      ststus: "error",
      message: error.message,
      content: null,
    });
  }
};

const getServices = async (req, res) => {
  try {
    const serviceId = req.body.id;
    const service = await CustomPackagesSchema.findById(serviceId);
    if (service) {
      console.log(service);
      return res.status(200).send({
        status: "success",
        message: "Successfull fetched a service",
        content: service,
      });
    }
  } catch (error) {
      return res.status(500).send({
          status: "error",
          message :error.message,
          content: null,
      })
  }
};

module.exports = { addMainService, getServices };

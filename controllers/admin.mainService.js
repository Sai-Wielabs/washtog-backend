const MainServicesSchema = require("../models/Services/mainServices");
const FloorScrubbingSchema = require("../models/Services/floorScrubbing");
const CustomPackage = require("../models/Services/custom");

const addMainService = async (req, res) => {
  try {
    const mainservice = await MainServicesSchema.findById(
      "61c2b6533606e4451a4762c1"
    );

    const addedSub = await new FloorScrubbingSchema(
      req.body.servicesOffered[0]
    ).save();
    mainservice.servicesOffered = [
      ...mainservice.servicesOffered,
      addedSub["_id"],
    ];

    await MainServicesSchema.findByIdAndUpdate(
      "61c2b6533606e4451a4762c1",
      mainservice
    );

    const services = await MainServicesSchema.find();

    return res.status(200).send({
      status: "success",
      message: "successfully added a service",
      content: services,
    });
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
  console.log("body is ",req.params.serviceId);
  try {
    const serviceId = req.params.serviceId;
    const service = await CustomPackage.findById(serviceId);
    if (service) {
      console.log(service);
      return res.status(200).send({
        status: "success",
        message: "Successfull fetched a service",
        content: service,
      });
    }
    else{
      const service = await FloorScrubbingSchema.findById(serviceId);
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
      message: error.message,
      content: null,
    });
  }
};

const getAllservices = async(req,res) => {
  try {
    const services = await MainServicesSchema.find();
    console.log(services);
    if(services){
      return res.status(200).send(services);
    }

    else{
      return res.status(400).send({
        status : 'Failed',
        message : "No Services Available",
        content :null,
      })
    }
  } catch (error) {
    return res.status(500).send({
      status : 'Failed',
      message : error.message,
      content :null,
    })
    
  }
}

module.exports = { addMainService, getServices ,getAllservices};

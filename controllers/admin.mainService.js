const MainServicesSchema = require("../models/Services/mainServices");
const FloorScrubbingSchema = require("../models/Services/floorScrubbing")

const addMainService = async (req, res) => {
  const addedSub = await new FloorScrubbingSchema(
    req.body.servicesOffered[0]
  ).save();
  try {
    const mainservice = await MainServicesSchema.findById("61c066a343f53e8cb8653be3");

    mainservice.servicesOffered = [...mainservice.servicesOffered , addedSub["_id"]]

    await MainServicesSchema.findByIdAndUpdate("61c066a343f53e8cb8653be3",mainservice);

    console.log(await MainServicesSchema.find());
    
    

    // const addedService = await new MainServicesSchema.findByIdAndUpdate("61c066a343f53e8cb8653be3",{
    //   "servicesOffered" : addedSub,
    // });
    // console.log(addedService);
   
    // req.body.servicesOffered = [addedSub._id];


      return res.status(200).send({
        status: "success",
        message: "successfully added a service",
        content: "",
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
  try {
    const serviceId = req.body.id;
    const service = await CustomPackage.findById(serviceId);
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

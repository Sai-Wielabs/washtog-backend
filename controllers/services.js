const CustomPackage = require("../models/Services/custom");
const MainServicesSchema = require("../models/Services/mainServices")
const getService = async (req,res)  => {
    try {
       const subServices = await CustomPackage.findById("61c0640fa2f72e30701143a3");
        console.log("sub servcies are ",subServices)
       const services = await MainServicesSchema.find();
        console.log(services);
        return res.send(services);
    } catch (error) {
        return res.status(400).send({
            status : "Failed",
            message :error.message,
            content : null,
        })
    }
}

module.exports = getService;
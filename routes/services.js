const express = require('express')

const router = express.Router();

const addCustomPackage = require("../controllers/admin.addCustomService")
const {addMainService,getServices,getAllservices,} = require('../controllers/admin.mainService');
const getService = require("../controllers/services")
const addCustomSubService = require("../controllers/admin.addCustomSubService")
const getCustomPackagesSubService = require("../controllers/admin.getSubservice")




router.post("/addService", addMainService);
router.get("/getAllServices",getAllservices);
//router.get("/getSubService/:serviceId/",getServices)
router.post("/addCustomPackage",addCustomPackage)
router.post("/addSubService",addCustomSubService)




router.get("/getSubServices",getCustomPackagesSubService);


module.exports = router;



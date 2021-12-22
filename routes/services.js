const express = require('express')

const router = express.Router();

const {addMainService,getServices,getAllservices} = require('../controllers/admin.mainService');
const getService = require("../controllers/services")




router.post("/addService", addMainService);
router.get("/getAllServices",getAllservices);
router.get("/getSubService/:serviceId/",getServices)


module.exports = router;



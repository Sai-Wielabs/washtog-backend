const express = require('express')

const router = express.Router();

const {addMainService,getServices} = require('../controllers/admin.mainService');
const getService = require("../controllers/services")




router.post("/addService", addMainService);
router.get("/getService", getService);


module.exports = router;



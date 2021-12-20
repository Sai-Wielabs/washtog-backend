const express = require('express')

const router = express.Router();

const {addMainService,getServices} = require('../controllers/admin.mainService');




router.post("/addService", addMainService);
router.get("/getService", getServices);


module.exports = router;



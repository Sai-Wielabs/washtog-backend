const {addCurtainDryCleaning,getCurtainDryCleaning} = require('../../controllers/admin.dryCleaning/admin.curtain_dry_cleaning')
const {addSoftToysDryCleaning,getSoftToysDryCleaning} = require('../../controllers/admin.dryCleaning/admin.soft_toys_dry_cleaning')
const express = require('express')
const router = express.Router();

router.post("/curtainDryService",addCurtainDryCleaning)
router.get("/curtainDryService",getCurtainDryCleaning)
router.post("/softToysDryService",addSoftToysDryCleaning)
router.get("/softToysDryService",getSoftToysDryCleaning)


module.exports = router;





const express = require('express')

const router = express.Router();

const {getAdds,addAdds} = require('../controllers/adds')


router.get("/getAdds",getAdds);
router.post("/addAdds",addAdds);

module.exports = router
const express = require("express");

const {getPopularItems,addPopularItem} = require("../controllers/popularItems");

const router = express.Router();

router.get("/getPopularItems",getPopularItems);
router.post("/addPopularItem",addPopularItem)

module.exports = router;

const express = require("express");

const getPopularItems = require("../controllers/popularItems");

const router = express.Router();

router.get("/getPopularItems",getPopularItems);

module.exports = router;

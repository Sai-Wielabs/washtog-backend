
const express = require('express');
const { user_register, user_update } = require('../controllers/user');
const { registerValidate } = require('../middlewares/registerValidation');

const router = express.Router();


router.post("/registerUser",registerValidate,user_register);
router.put('/updateUser/:id',user_update)

module.exports = router;
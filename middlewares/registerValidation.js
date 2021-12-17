const Joi = require('joi')
const mongoose = require("mongoose");


const registerValidate = (req,res,next) => {
    console.log("middleware called")

    if(!req.body){
        return res.status(400).send({
            status:"fail",
            message:"please check your request!",
            content:null
        })
    }

    const schema = Joi.object({
        phoneNumber: Joi.string().min(10).required(),
        uId: Joi.string().min(6).required(),
    });

    const {error,value} =  schema.validate(req.body);
    if(error){
        return res.status(400).send({
            status:"fail",
            message:error.details[0].message,
            content:null
        })
    }    
    next()     
}

module.exports.registerValidate = registerValidate;


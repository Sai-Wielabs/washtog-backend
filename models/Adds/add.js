const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const addSchema = new Schema({

    title :{
        type : String,
        required : true,
        
    },
    serviceId : {
        type : String,
        required : true,
    },
    imageUrl : {
        type : String,
    }

});

const Addschema = new mongoose.model('Addschena',addSchema);

module.exports = Addschema;
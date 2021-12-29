const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const softToysDryCleaningSchema = new Schema({


    title : {
        type : String,
        required : true
    },
    steps : {
        type : Map,
        required : true
    },
    typeOfService : {
        type :Array,
        required : true
    },

});



const SoftToysDryCleaningSchema = mongoose.model("softToysDryCleaningSchemaCollection",softToysDryCleaningSchema);


module.exports = SoftToysDryCleaningSchema;
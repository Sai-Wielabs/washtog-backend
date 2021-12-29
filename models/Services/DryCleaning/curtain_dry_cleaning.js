const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const curtainDryCleaningSchema = new Schema({


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



const CurtainDryCleaningSchema = mongoose.model("curtainsDryCleaningCollection",curtainDryCleaningSchema);


module.exports = CurtainDryCleaningSchema;
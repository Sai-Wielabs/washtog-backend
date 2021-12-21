const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CarperCleaningSchema = new Schema({
    steps : {
        type : Array,
        required : true,

    },
    pricesList : {
        type : Map,
        required : true,
        
    }
});
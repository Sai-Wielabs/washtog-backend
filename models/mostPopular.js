const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mostPopularSchema = new Schema({
  
   
    discount : {
        type : String,
        required : true,
    },
    service : {
        type: String,
        required : true,
    },
    imageUrl : {
        type : String,
        required : true,
    }
  
});

 
const MostPopularSchema = mongoose.model("MostPopularCollection", mostPopularSchema);
module.exports = MostPopularSchema;

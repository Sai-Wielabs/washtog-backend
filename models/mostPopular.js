const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mostPopularSchema = new Schema({
  
   
    discount : {
        type : String,
        required : true,
    },
    service : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "services"
    }
  
});

 
const MostPopularSchema = mongoose.model("MostPopularCollection", mostPopularSchema);
module.exports = MostPopularSchema;

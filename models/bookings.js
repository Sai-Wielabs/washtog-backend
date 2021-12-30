const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
serviceId : {
    type : String,
    required : true
},
serviceName : {
    type : String,
    required : true
},
userId  :{
type : String,
required : true
}  ,
categoryName = {
    type : String,
    required : true
},
price : {
    type : String,
    required : true,
},
quantity : {
    type : String,
    required : true
},
units : {
    type : String,
    required : true
},
status : {
    type : String,
    required : true,
}
});


const BookingSchema = mongoose.model("BookingSchema", bookingSchema);
module.exports = BookingSchema;

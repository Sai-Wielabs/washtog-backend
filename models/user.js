const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  uId: {
    type: String,
    required: true,
  },
  userName: String,
  addresses: [

  ],
  flatNo: String,
});


const User = mongoose.model("User", userSchema);
module.exports = User;

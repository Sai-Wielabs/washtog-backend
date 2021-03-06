const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const floorScrubbingSchema = new Schema({
  videoUrl : String,
  description: {
    type: Map,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  area: {
    type: Array,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});


const FloorScrubbingSchema = new mongoose.model("FloorScrubbingCollection",floorScrubbingSchema);

module.exports = FloorScrubbingSchema;

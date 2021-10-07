const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RangeValueSchema = new Schema({
    low : { type: Number, required: true },
    high : { type: Number, required: true },
    special : { type: String }
  })

  module.exports = mongoose.model("RangeValue", RangeValueSchema)
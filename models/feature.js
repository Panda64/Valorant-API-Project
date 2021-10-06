const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FeatureSchema = new Schema({
    type : { type: String, required: true },
    attributes : { type: Array, required: true }
  })

  module.exports = mongoose.model("Feature", FeatureSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AltFireFeatureSchema = new Schema({
    type : { type: String, required: true },
    attributes : { type: Array, required: true }
  })
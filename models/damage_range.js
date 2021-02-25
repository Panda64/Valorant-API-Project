const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DamageRangeSchema = new Schema({
    range : { type: String, required: true },
    head : { type: String, required: true },
    body : { type: String, required: true },
    legs : { type: String, required: true }
  })

  module.exports = mongoose.model("DamageRange", DamageRangeSchema)
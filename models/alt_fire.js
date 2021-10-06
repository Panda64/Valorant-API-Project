const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AltFireSchema = new Schema({
    type : { type: String, required: true },
    attributes : { type: Schema.Types.ObjectId, ref: "Attribute", required: true }
  })

  AltFireSchema
    .pre('findOne', Populate('attributes'))
    .pre('find', Populate('attributes'))

  module.exports = mongoose.model("AltFire", AltFireSchema)
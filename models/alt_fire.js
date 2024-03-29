const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Populate = require("../util/autopopulate")

const AltFireSchema = new Schema({
    type : { type: String, required: true },
    attributes : { type: Schema.Types.ObjectId, ref: "AltFireAttribute", required: true }
  })

  AltFireSchema
    .pre('findOne', Populate('attributes'))
    .pre('find', Populate('attributes'))

  module.exports = mongoose.model("AltFire", AltFireSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Populate = require("../util/autopopulate")

const DamageRangeSchema = new Schema({
    range : { type: Schema.Types.ObjectId, ref: "RangeValue", required: true },
    head : { type: String, required: true },
    body : { type: String, required: true },
    legs : { type: String, required: true }
  })

  DamageRangeSchema
    .pre('findOne', Populate('range'))
    .pre('find', Populate('range'))

  module.exports = mongoose.model("DamageRange", DamageRangeSchema)
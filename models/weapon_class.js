const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Populate = require("../util/autopopulate")

const WeaponClassSchema = new Schema({
    name : { type: String, required: true, unique: true },
    weapons : [{ type: Schema.Types.ObjectId, ref: "Weapon"}]
  })

  WeaponClassSchema
    .pre('findOne', Populate({
        path : "weapons",
        populate : { path : "first_shot_spread damage alt_fire feature" },
    }))
    .pre('find', Populate({
        path : "weapons",
        populate : { path : "first_shot_spread damage alt_fire feature" },
    }))

  module.exports = mongoose.model("WeaponClass", WeaponClassSchema)
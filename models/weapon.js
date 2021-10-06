const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Populate = require("../util/autopopulate")

const WeaponSchema = new Schema({
    name : { type: String, required: true, unique: true },
    cost : { type: Number, required: true },
    spread : { type: String, required: true },
    fire_type : { type: String, required: true },
    penetration : { type: String, required: true },
    fire_rate : { type: Number, required: true },
    run_speed : { type: Number, required: true },
    equip_speed : { type: Number, required: true },
    first_shot_spread : { type: String, required: true },
    reload_speed : { type: Number, required: true },
    magazine : { type: Number, required: true },
    damage : [{ type: Schema.Types.ObjectId, ref: "DamageRange"}],
    alt_fire : { type: Schema.Types.ObjectId, ref: "AltFire" },
    feature : { type: Schema.Types.ObjectId, ref: "Feature" }
  })

  WeaponSchema
    .pre('findOne', Populate('damage alt_fire feature'))
    .pre('find', Populate('damage alt_fire feature'))

  module.exports = mongoose.model("Weapon", WeaponSchema)
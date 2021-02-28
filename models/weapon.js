const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Populate = require("../util/autopopulate")

const WeaponSchema = new Schema({
    name : { type: String, required: true },
    cost : { type: String, required: true },
    spread : { type: String, required: true },
    fire_type : { type: String, required: true },
    penetration : { type: String, required: true },
    fire_rate : { type: String, required: true },
    run_speed : { type: String, required: true },
    equip_speed : { type: String, required: true },
    first_shot_spread : { type: String, required: true },
    reload_speed : { type: String, required: true },
    magazine : { type: String, required: true },
    damage : [{ type: Schema.Types.ObjectId, ref: "DamageRange"}],
    alt_fire : { type: Schema.Types.ObjectId, ref: "AltFireFeature"},
    feature : { type: Schema.Types.ObjectId, ref: "AltFireFeature"}
  })

  WeaponSchema
    .pre('findOne', Populate('damage alt_fire feature'))
    .pre('find', Populate('damage alt_fire feature'))

  module.exports = mongoose.model("Weapon", WeaponSchema)
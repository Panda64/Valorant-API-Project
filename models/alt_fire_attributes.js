const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AltFireAttributeSchema = new Schema({
    pellet_count : { type: Number},
    burst_rate : { type: Number},
    fire_rate : { type: Array, default: void 0 },
    zoom : { type: Number},
    move_speed : { type: Array, default: void 0 },
    rounds_per_burst : { type: Number},
    canister_detonation_distance : { type: Number},
    special : { type: Array, default: void 0 }
  })

  module.exports = mongoose.model("AltFireAttribute", AltFireAttributeSchema)
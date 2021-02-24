const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WeaponClassSchema = new Schema({
    name : { type: String, required: true },
    weapons : [{ type: Schema.Types.ObjectId, ref: "Weapon"}]
  })
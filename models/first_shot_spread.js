const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FirstShotSpreadSchema = new Schema({
    hip : { type: Number, required: true },
    ads : { type: Number }
  })

  module.exports = mongoose.model("FirstShotSpread", FirstShotSpreadSchema)
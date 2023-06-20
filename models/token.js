const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchme = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    symbol: {
      type: String,
      required: true
    },
    dailyChange: {
      type: Number,
      required: false,
      default: 0
    },
    unitPrice: {
      type: Number,
      required: false,
      default: 1
    }
  },
  { timestamps: true }
)

module.exports = Token = mongoose.model('Token', tokenSchme)

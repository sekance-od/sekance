const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchme = new Schema({
  name: String,
  surname: String,
  birthday: Number,
  password: String,
  email: String,
  phone: String
  // walletId: String,
})

module.exports = User = mongoose.model('User', userSchme)

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchme = new Schema({
  title: String,
  description: String,
  url: String,
  content: String,
  publishedAt: String
})

module.exports = News = mongoose.model('News', newsSchme)

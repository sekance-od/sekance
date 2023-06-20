const News = require('../models/news')

const createNews = data => {
  return News.create(data)
}

const findNews = (query, projection) => {
  const { size } = query

  return News.find({}, projection).limit(parseInt(size))
}

module.exports = {
  createNews,
  findNews
}

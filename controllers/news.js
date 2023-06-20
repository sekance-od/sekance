// Data Access
const dataAccess = require('../data-access')
// Libs
const { StatusCodes } = require('http-status-codes')
// Utils
const utils = require('../utils')
// NewsAPI
const NewsAPI = require('newsapi')
const apiKey = process.env.NEWS_API_KEY
const newsapi = new NewsAPI(apiKey)

const analyzeNews = async (req, res) => {
  const { url } = req.body
  const analyise = await utils.analysisUtils.analyiseNews(url)

  res.status(StatusCodes.OK).json({ analyise })
}

const createNews = async (req, res) => {
  const { body } = req
  try {
    await dataAccess.newsDataAccess.createNews(body)
    res.sendStatus(StatusCodes.CREATED)
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

const fetchNews = async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      sources:
        'bbc-news,abc-news,al-jazeera-english,ars-technica,associated-press,bloomberg,business-insider,cbs-news,cnbc,cnn,engadget,fortune,fox-news,hacker-news,medical-news-today,mirror,msnbc,national-geographic,nbc-news,new-scientist,news24,newsweek,new-york-magazine,next-big-future,politico,recode,reuters,techcrunch,techradar,the-hill,the-huffington-post,the-new-york-times,the-next-web,the-verge,the-wall-street-journal,the-washington-post,time,usa-today,wired',
      pageSize: 20
    })

    const newsData = response.articles
    const newsFromDB = await dataAccess.newsDataAccess.findNews({ size: 20 })

    const filteredNews = newsData.filter(news => {
      return !newsFromDB.some(newsDB => newsDB.url === news.url)
    })

    for (let index = 0; index < filteredNews.length; index++) {
      const article = filteredNews[index]
      const { title, description, url, publishedAt, content } = article
      const data = {
        title,
        description,
        content,
        url,
        publishedAt
      }

      dataAccess.tokenDataAccess.upda
      dataAccess.newsDataAccess.createNews(data)
    }

    return res.status(StatusCodes.CREATED).json(filteredNews)
  } catch (error) {
    throw res.status(500).json({ error: 'Haber verileri alınırken bir hata oluştu' })
  }
}

const getNews = async (req, res) => {
  try {
    const news = await dataAccess.newsDataAccess.findNews(req.query)
    res.status(StatusCodes.OK).json(news)
  } catch (e) {
    console.log(e)
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
  analyzeNews,
  createNews,
  fetchNews,
  getNews
}

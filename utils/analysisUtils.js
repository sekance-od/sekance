const fetch = require('isomorphic-fetch')
const newsCategories = require('../constants/categories')

const secretKey = process.env.MEANING_CLOUD_API_KEY

const sentimentAnalysis = async url => {
  const endpoint = process.env.MEANING_CLOUD_SENTIMENT_ENDPOINT

  const body = {
    key: secretKey,
    lang: 'en',
    url: url
  }

  const urlencoded = new URLSearchParams()

  for (const key in body) {
    urlencoded.append(key, body[key])
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    body: urlencoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const data = await response.json()
  return data.score_tag
}

const classifyAnalysis = async url => {
  const endpoint = process.env.MEANING_CLOUD_CLASSIFY_ENDPOINT

  const body = {
    key: secretKey,
    model: 'IPTC_en',
    url: url
  }

  const urlencoded = new URLSearchParams()

  for (const key in body) {
    urlencoded.append(key, body[key])
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    body: urlencoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const data = await response.json()
  return data.category_list[0].code.slice(0, 2)
}

const countryAnalysis = async url => {
  const endpoint = process.env.MEANING_CLOUD_TOPIC_ENDPOINT

  const body = {
    key: secretKey,
    lang: 'en',
    topic: 2,
    tt: 'e',
    subtopics: 'n',
    url: url
  }

  const urlencoded = new URLSearchParams()

  for (const key in body) {
    urlencoded.append(key, body[key])
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    body: urlencoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const data = await response.json()

  const countries = data.entity_list.map(entity => {
    if (entity.sementity.type === 'Top>Location>GeoPoliticalEntity>Country') {
      return entity.form
    }
  })

  const nullRemoved = countries.filter(country => country !== undefined)
  return nullRemoved
}

const analyiseNews = async url => {
  const sentimental = await sentimentAnalysis(url)
  const effectedCountries = await countryAnalysis(url)
  const category = await classifyAnalysis(url)

  return { sentimental, effectedCountries, category: newsCategories[category] }
}

module.exports = {
  analyiseNews
}

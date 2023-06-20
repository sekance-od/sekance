const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', controllers.newsController.fetchNews)

router.post('/analysis', controllers.newsController.analyzeNews)
module.exports = router

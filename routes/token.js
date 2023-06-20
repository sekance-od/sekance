const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

// DB CRUD
router.post('/', controllers.tokenController.createToken)
router.get('/', controllers.tokenController.getTokens)

// Buy Tokens
router.post('/buy', controllers.tokenController.buyTokens)
// Update Token Price

router.put('/price', controllers.tokenController.updateTokenPrice)

// Get Token Details
router.get('/contract', controllers.tokenController.getTokenDetails)

module.exports = router

const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.post('/', controllers.userController.createUser)

module.exports = router

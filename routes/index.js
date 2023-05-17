const express = require('express')
const router = express.Router()

// Routes
const userRoutes = require('./user')

router.use('/test', (req, res) => {
  res.send('Hello World')
})

router.use('/user', userRoutes)

module.exports = router

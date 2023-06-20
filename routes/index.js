const express = require('express')
const router = express.Router()

// Routes
const newsRoutes = require('./news')
const tokenRoutes = require('./token')
const userRoutes = require('./user')

router.use('/test', (req, res) => {
  res.send('Test route worked!')
})

router.use('/news', newsRoutes)
router.use('/token', tokenRoutes)
router.use('/user', userRoutes)

module.exports = router

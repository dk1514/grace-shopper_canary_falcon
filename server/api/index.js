const express = require('express')
const SERVER_CONFIGS = require('./constants/server')
const configureServer = require('./server')
const configureRoutes = require('./routes')
const router = express()
router.use('/users', require('./users'))
router.use('/orders', require('./orders'))
router.use('/hats', require('./hats'))
router.use('/payment', require('./routes/payment'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

configureServer(router)
configureRoutes(router)

module.exports = router

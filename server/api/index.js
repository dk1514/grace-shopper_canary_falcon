const express = require('express')
const SERVER_CONFIGS = require('./constants/server')
const configureServer = require('./server')
const configureRoutes = require('./routes')
const router = express()
router.use('/users', require('./users'))
router.use('/orders', require('./orders'))
router.use('/hats', require('./hats'))
router.use('/charge', require('./charge'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

configureServer(router)
configureRoutes(router)

router.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT)
})
module.exports = router

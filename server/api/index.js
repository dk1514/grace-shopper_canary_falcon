const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/orders', require('./orders'))
router.use('/hats', require('./hats'))
router.use('/testing', require('./testing'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router

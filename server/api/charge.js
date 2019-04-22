const router = require('express').Router()
const {Order} = require('../db/models')
const stripe = require('stripe')('pk_test_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX')
module.exports = router

router.use(require('body-parser').text())

router.post('/', async (req, res) => {
  try {
    let order = await Order.create(req.body)
    res.json(order)
  } catch (err) {
    res.status(500).end()
  }
})

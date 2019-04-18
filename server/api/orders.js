const router = require('express').Router()
const {Hat, Order, OrderHat, User} = require('../db/models')
module.exports = router

//Get all orders
router.get('/', async (req, res, next) => {
  try {
    // if (req.user.isAdmin) {
    const allOrders = await Order.findAll({
      include: [{model: Hat}]
    })
    res.status(200).json(allOrders)
    // } else {
    // res.sendStatus(403)
  } catch (err) {
    // }
    next(err)
  }
})

router.get('/cart', async (req, res, next) => {
  try {
    // if (req.user.isAdmin) {
    const orderHat = await OrderHat.findAll()
    console.log('orderHat/get', req.body);
    res.status(200).json(orderHat)
    // } else {
    // res.sendStatus(403)
  } catch (err) {
    // }
    next(err)
  }
})

router.post('/cart', async (req, res, next) => {
  try {
    // if (req.user.isAdmin) {
    const orderHat = await OrderHat.create(req.body)
    res.status(200).json(orderHat)
    // } else {
    // res.sendStatus(403)
  } catch (err) {
    // }
    next(err)
  }
})

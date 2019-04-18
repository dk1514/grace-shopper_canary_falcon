const router = require('express').Router()
const {Hat, Order, OrderHat, User} = require('../db/models')
module.exports = router

//Get all orders
router.get('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const allOrders = await Order.findAll({
        include: [{model: Hat}]
      })
      res.status(200).json(allOrders)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

// GET all products in Order
router.get('/', async (req, res, next) => {
  try {
    const data = await Order.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// GET one product from Order
router.get('/:id', async (req, res, next) => {
  try {
    const data = await Order.findByPk(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// POST product to Order
router.post('/', async (req, res, next) => {
  try {
    req.session.order = req.body
    // req.session.save(req.session)
    const order = await Order.create(req.body)
    res.status(201).json(order)
  } catch (error) {
    next(error)
  }
})

// PUT to update products/quantities in CART
router.put('/:id', async (req, res, next) => {
  try {
    const updateOrder = await Order.findByPk(req.params.id)
    updateOrder.update(req.body)
    res.json(updateOrder)
  } catch (error) {
    next(error)
  }
})

// DELETE product from Order
router.delete('/:id', async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {Cart} = require('../db/models')
module.exports = router

// GET all products in Cart
router.get('/', async (req, res, next) => {
  try {
    const data = await Cart.findAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// get one cart
router.get('/:id', async (req, res, next) => {
  try {
    console.log('in GET route')
    const data = await Cart.findByPk(req.params.id)
    console.log('data: ', data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// POST product to Cart
router.post('/', async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body)
    res.status(201).json(cart)
  } catch (error) {
    next(error)
  }
})

// PUT to update products/quantities in CART
router.put('/:id', async (req, res, next) => {
  try {
    const updateCart = await Cart.findByPk(req.params.id)
    updateCart.update(req.body)
    res.json(updateCart)
  } catch (error) {
    next(error)
  }
})

// DELETE product from Cart
router.delete('/:id', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

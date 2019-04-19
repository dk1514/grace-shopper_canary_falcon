const router = require('express').Router()
const {User, Order, Hat, OrderHat} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// GET one user and eager load orders
router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    if (userId === req.params.userId || req.user.isAdmin) {
      const particularUser = await User.findByPk(+req.params.userId, {
        include: [{model: Order}]
      })
      if (!particularUser) {
        res.sendStatus(404)
      }
      // find or create cart based on user id and cart
      const cart = await Order.findOrCreate({
        where: {userId: +req.params.userId, isCart: true},
        include: [{model: Hat}]
      })
      req.session.cart = cart
      res.status(200).json({particularUser, cart})
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// get current cart

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    if (userId === +req.params.userId) {
      const cart = await Order.findOne({
        where: {isCart: true, userId: +req.params.userId},
        include: [{model: Hat}]
      })
      res.status(200).json(cart)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// get past orders

router.get('/:userId/past', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    if (userId === +req.params.userId) {
      const cart = await Order.findAll({
        where: {isCart: false, userId},
        include: [{model: Hat}]
      })
      res.status(200).json(cart)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// PUT, update cart
router.put('/:userId/cart', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    const productId = +req.body.product.id || null
    if (userId === +req.params.userId) {
      let cart = await Order.findOne({
        where: {isCart: true, userId}
      })
      let product = await Hat.findOne({
        where: {id: productId}
      })
      await cart.addProduct(product)
      const updateJoinTable = await OrderHat.findOne({
        where: {orderId: cart.id, productId: product.id}
      })
      await updateJoinTable.update({
        quantity: updateJoinTable.quantity + +req.body.quantity,
        historicPrice: req.body.product.price
      })
      let returnCart = await Order.findOne({
        where: {isCart: true, userId},
        include: [{model: Product}]
      })
      res.status(201).json(returnCart)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// DELETE item from cart
router.put('/:userId/removeitem', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    if (userId === +req.params.userId) {
      let cart = await Order.findOne({
        where: {isCart: true, userId: +req.params.userId},
        include: [{model: Hat}]
      })
      let product = await Hat.findOne({
        where: {id: +req.body.productId}
      })
      await cart.removeProduct(product)
      let returnCart = await Order.findOne({
        where: {isCart: true, userId: +req.params.userId},
        include: [{model: Hat}]
      })
      res.status(201).json(returnCart)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// reset quantity in cart

router.put('/:userId/editquantity', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    const productId = +req.body.product.id || null
    if (userId === +req.params.userId) {
      let cart = await Order.findOne({
        where: {isCart: true, userId}
      })
      let product = await Hat.findOne({
        where: {id: productId}
      })
      await cart.addProduct(product)
      const updateJoinTable = await OrderHat.findOne({
        where: {orderId: cart.id, productId: product.id}
      })
      await updateJoinTable.update({
        quantity: +req.body.quantity
        // historicPrice: req.body.product.price
      })
      let returnCart = await Order.findOne({
        where: {isCart: true, userId},
        include: [{model: Hat}]
      })
      res.status(201).json(returnCart)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

// PUT, checkout
router.put('/:userId/checkout', async (req, res, next) => {
  try {
    const userId = req.user.id || null
    if (userId === +req.params.userId) {
      let cart = await Order.findOne({
        where: {isCart: true, userId: +req.params.userId},
        include: [{model: Hat}]
      })
      // Update price on checkout
      const {products} = cart
      const productPromises = products.map(product =>
        Hat.findOne({where: {id: product.id}})
      )
      const dbProductsArray = await Promise.all(productPromises)
      // turn fetched products into promises of added products
      const updateJoinTablePromises = dbProductsArray.map(product =>
        OrderHat.findOne({
          where: {orderId: cart.id, productId: product.id}
        })
      )
      const joinTableArray = await Promise.all(updateJoinTablePromises)

      // find updated order and set to past
      const checkout = await cart.update({
        isCart: false,
        isShipped: false
      })
      // create new cart
      await Order.findOrCreate({
        where: {userId: +req.params.userId, isCart: true},
        include: [{model: Hat}]
      })
      res.status(201).json(checkout)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

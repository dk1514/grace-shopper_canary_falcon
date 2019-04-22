const router = require('express').Router()
const stripe = require('stripe')('pk_test_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX')
module.exports = router

router.use(require('body-parser').text())

router.post('/charge', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })

    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})

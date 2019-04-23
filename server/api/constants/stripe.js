const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_live_BIHAFFpcIRTZFLb1ZQRcFX3b00Z8mUcJ9n'
    : 'sk_test_BIHAFFpcIRTZFLb1ZQRcFX3b00Z8mUcJ9n'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe

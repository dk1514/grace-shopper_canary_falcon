const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX'
    : 'pk_test_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX'

export default STRIPE_PUBLISHABLE

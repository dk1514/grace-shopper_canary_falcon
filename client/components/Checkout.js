import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const onToken = amount => token =>
  axios
    .post('/api/charge', {
      source: token.id,
      amount: amount
    })
    .then(() => console.log('payment received'))
    .catch(() => console.log('payment failed'))

// fetch('/charge', {
//   method: 'POST',
//   body: JSON.stringify(token)
// }).then(response => {
//   response.json().then(data => {
//     alert(`We are in business, ${data.email}`)
//   })
// }) }

const Checkout = ({amount = 9999}) => (
  <StripeCheckout
    stripeKey="pk_test_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX"
    name="testhat"
    amount={amount}
    token={onToken(amount)}
  />
)
export default Checkout

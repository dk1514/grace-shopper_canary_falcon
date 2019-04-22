import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class FrontPage extends React.Component {
  onToken = token => {
    fetch('/charge', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
      })
    })
  }
  render() {
    return (
      <div className="title is-1">
        Welcome to the Canary Falcon Hat Store
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_xgrPETMf6WI9h6hsoSx0ZuHa00ysdLb7MX"
        />
      </div>
    )
  }
}

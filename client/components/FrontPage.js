import React from 'react'
import Checkout from './Checkout'

export default class FrontPage extends React.Component {
  render() {
    return (
      <div className="title is-1">
        Welcome to the Canary Falcon Hat Store
        <Checkout />
      </div>
    )
  }
}

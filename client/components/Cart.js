import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cart extends Component {
  // remove item from cart
  handleRemove = id => {
    this.props.removeFromCart(id)
  }
  // increase quantity
  handleAddQuantity = id => {
    this.props.increaseQuantity(id)
  }
  // decrease quantity
  handleSubtractQuantity = id => {
    this.props.decreaseQuantity(id)
  }
  render() {
    console.log('from cart render', this.props)
    return (
      <div className="container">
        <div className="cart">
          <h5>
            You have ordered:{Object.keys(this.props.state.orders.cart)[0]}
          </h5>
          <ul className="collection">ADDED ITEMS GO HERE</ul>
        </div>
        <div>
          <b>Total: ${this.props.total}</b>
        </div>
        {/* <Checkout /> */}
        <div className="checkout">
          <Link to="/success">
            <button className="button is-primary" type="button">
              Submit Order
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('from state', state)
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

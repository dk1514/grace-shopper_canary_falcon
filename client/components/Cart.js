import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart, editQuantity, removeItem} from '../store/orders'
import Checkout from './Checkout'

class Cart extends Component {
  render() {
    let {cart} = this.props.cart.orders
    let currentCart = Object.values(cart)
    console.log('cart', cart)
    console.log('current cart', currentCart)
    let total = currentCart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price / 100,
      0
    )
    let addedItems = !Object.values(cart).length ? (
      <p>Shopping cart is empty.</p>
    ) : (
      currentCart.map(item => {
        return item.quantity > 0 ? (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <figure className="image is-48x48">
                <img src={item.imageUrl} alt={item.img} className="" />
              </figure>
            </td>
            <td>{item.description}</td>
            <td>${item.price / 100}</td>
            <td>{item.quantity}</td>
            <td>
              <div>
                <button
                  className="button is-success"
                  onClick={() => this.props.handleAdd(item)}
                >
                  Increase
                </button>
                <button
                  className="button is-warning"
                  onClick={() => this.props.handleSubtract(item)}
                >
                  Decrease
                </button>
              </div>
            </td>

            <td>
              <button
                className="button is-danger"
                onClick={() => this.props.handleRemove(item)}
              >
                Remove
              </button>
            </td>
          </tr>
        ) : null
      })
    )

    return (
      <div>
        <div>
          <h1 className="title">Your Order</h1>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Change Quantity</th>
              <th>Remove Item</th>
            </thead>
            <tbody>{addedItems}</tbody>
          </table>
        </div>
        <div>Total: ${total}</div>
        <div className="checkout">
          <Checkout description="Hopefully some hats" amount={cart.price} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleAdd: item => dispatch(addToCart(item)),
    handleSubtract: item => dispatch(editQuantity(item)),
    handleRemove: item => dispatch(removeItem(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

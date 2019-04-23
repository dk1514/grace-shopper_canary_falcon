import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart, editQuantity, removeItem} from '../store/orders'

class Cart extends Component {
  render() {
    let {cart} = this.props
    let currentCart = Object.values(cart)
    let addedItems = Object.values(cart).length ? (
      currentCart.map(item => {
        console.log(item)
        return (
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
        )
      })
    ) : (
      <p>Shopping cart is empty.</p>
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
        <div>Total: 0</div>
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
  console.log(state.orders.cart)
  return {
    cart: state.orders.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // totalCartPrice: cart => dispatch(cartSumProduct(cart))
    handleAdd: item => dispatch(addToCart(item)),
    handleSubtract: item => dispatch(editQuantity(item)),
    handleRemove: item => dispatch(removeItem(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

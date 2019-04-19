import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/orders'
import {Link} from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
import Order from './Order'
import {
  getCart,
  putCheckout,
  postUnauthOrder,
  deleteProductFromCart,
  gotCart,
  getTotal
} from '../store'

let defaultState = {
  cart: {
    products: [],
    isCart: true
  }
}

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.handleCheckout = this.handleCheckout.bind(this)
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
  }

  componentDidMount() {
    // if (this.props.match.params.userId) {
    //   this.props.getCart(this.props.match.params.userId)
    // } else {
    //   let localStorageCart = JSON.parse(localStorage.getItem('cart'))
    //   this.setState({
    //     cart: localStorageCart
    //   })
    // }
      this.props.getCart(this.props.match.params.userId)
  }

  handleDeleteProduct(userId, productId) {
    if (this.props.user.id) {
      this.props.deletedProductFromCart(userId, productId)
    } else {
      const products = this.state.cart.products
      const newProducts = products.filter(item => item.id !== productId)
      this.setState({
        cart: {
          products: newProducts,
          isCart: true
        }
      })
      localStorage.setItem(
        'cart',
        JSON.stringify({products: newProducts, isCart: true})
      )
    }
  }

  handleCheckout() {
    if (this.props.user.id) {
      this.props.putCheckout(this.props.user.id)
    } else {
      let localStorageCart = JSON.parse(localStorage.getItem('cart'))
      this.props.postUnauthOrder(localStorageCart)
      localStorage.setItem('cart', JSON.stringify({isCart: true, products: []}))
      let emptyCart = JSON.parse(localStorage.getItem('cart'))
      this.setState({
        cart: emptyCart
      })
    }
  }

  render() {
    // console.log('from cart', this.props.cart)
    console.log('this.props', this.props)
    let cart = {}
    if (this.props.user.id) {
      if (this.props.cart.products) {
        cart = this.props.cart
      } else {
        cart = {isCart: true, products: []}
      }
    } else if (this.state.cart.products) {
      cart = this.state.cart
    } else {
      cart = {isCart: true, products: []}
    }
    return (
      <div className="cart">
        <Order
          user={this.props.user}
          order={cart}
          handleDeleteProduct={this.handleDeleteProduct}
        />
        {this.props.match.params.userId && cart.products.length ? (
            <button className="button" type="submit">
              Enter
            </button>
        ) : (
          ' '
        )}
        {cart.products.length ? (
            <CheckoutForm handleCheckout={this.handleCheckout} />
        ) : (
          <h2>Your Cart is Currently Empty</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.orders.cart,
    user: state.user,
    total: state.orders.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCart: userId => dispatch(getCart(userId)),
    putCheckout: user => dispatch(putCheckout(user)),
    postUnauthOrder: cart => dispatch(postUnauthOrder(cart)),
    deletedProductFromCart: (userId, productId) =>
      dispatch(deleteProductFromCart(userId, productId)),
    gotCart: cart => dispatch(gotCart(cart)),
    getTotal: total => dispatch(getTotal(total))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/cart'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  // componentDidMount() {
  async componentDidMount() {
    // try {
    //     const {data} = await axios.get('/api/cart/1')
    //     this.setState({quantity: data.quantity})
    // } catch(err) {console.error(err)}
    await this.props.getCartThunk()
    this.setState({loaded: true})
  }

  render() {
    if (!this.state.loaded) {
      console.log('nothing in cart yet!')
      return <div />
    }
    console.log('props', this.props)
    console.log('cart', this.props.cart)
    console.log('cart in cart', this.props.cart.cart[0])
    console.log('quantity in cart in cart', this.props.cart.cart[0].quantity)

    return (
      <div>
        <h1 className="title">Shopping Cart</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product</td>
              <td>Image</td>
              <td>{this.props.cart.cart[0].quantity}</td>
              <td>Price</td>
            </tr>
          </tbody>
        </table>
        <div>Total: $</div>
        <div>
            <Link to='/success'>
                <button className="button is-primary">Submit Order</button>
            </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: () => dispatch(getCartThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

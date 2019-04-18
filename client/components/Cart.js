import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getCartThunk} from '../store/orders'
import {Link} from 'react-router-dom'
import CheckoutForm from './CheckoutForm'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    // try {
    //     const {data} = await axios.get('/api/cart/1')
    //     this.setState({quantity: data.quantity})
    // } catch(err) {console.error(err)}
    this.props.getCartThunk()
    this.setState({loaded: true})
  }

  handleDeleteProduct(userId, hatId) {
    if(this.props.user.id) {
      this.props.deleteHatFromCart(userId, hatId)
    } else {
      const hats = this.state.cart.hats
      const newHats = hats.filter(item => item.id !== hatId)
      this.setState({
        cart: {
          hats: newHats,
          isCart: true
        }
      })
      // handle local storage
    }
  }

  handleCheckout() {
    if(this.props.user.id) {
      this.props.putCheckout(this.props.user.id)
    } else {
      const emptyCart = ''
      this.setState({cart: emptyCart})
    }
  }


  render() {
    if (!this.state.loaded) {
      console.log('nothing in cart yet!')
      return <div />
    }

    return(
      <div>

      </div>
    )


    // return (
    //   <div>
    //     <h1 className="title">Shopping Cart</h1>
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th>Product</th>
    //           <th>Image</th>
    //           <th>Quantity</th>
    //           <th>Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>Product</td>
    //           <td>Image</td>
    //           <td>Quantity</td>
    //           <td>Price</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <div>Total: $</div>
    //     <div>
    //         <Link to='/success'>
    //             <button className="button is-primary">Submit Order</button>
    //         </Link>
    //     </div>
    //   </div>
    // )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: () => dispatch(getCartThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

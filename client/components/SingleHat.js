import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setSingleHatThunk} from '../store/singleHatReducer'
import Cart from './Cart'
import {addToCart} from '../store/cartReducer'

class SingleHat extends Component {

  componentDidMount() {
    this.props.loadSingleHat()
  }

  handleClick(id) {
    this.props.addToCart(id)
    console.log('ADD ONE HAT')
    console.log('CART CONTENTS', this.props.cart);
  }

  render() {

    return (
      <div className='card'>
          <h1 className='title has-text-centered'>{this.props.singleHat.name}</h1>
        <div className='card-image'>
          <img className='card-image is-128x128' src={this.props.singleHat.imageUrl} />
        </div>
        <div className='card-content has-text-centered'>
          <ul>
            <li>Name: {this.props.singleHat.name}</li>
            <li>Description: {this.props.singleHat.description}</li>
            <li>Manufacturer: {this.props.singleHat.manufacturer}</li>
            <li>Price: ${this.props.singleHat.price / 100}</li>
            <li>Quantity: {this.props.singleHat.quantity}</li>
          </ul>
        </div>
        <div className='card-footer has-text-centered'>
          <button className='button is-primary' type="submit" onClick={this.handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    )
  }
}

const mSTP = state => {
  return {
    singleHat: state.singleHatReducer,
    cart: state.cart
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    loadSingleHat: () => dispatch(setSingleHatThunk(ownProps.match.params.id)),
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mSTP, mDTP)(SingleHat)

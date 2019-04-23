import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setSingleHatThunk} from '../store/singleHatReducer'

import {addToCart} from '../store/orders'

class SingleHat extends Component {
  componentDidMount() {
    this.props.loadSingleHat()
  }

  render() {
    return (
      <div className="card">
        <h1 className="title has-text-centered">{this.props.singleHat.name}</h1>
        <div className="card-image">
          <img
            className="card-image is-128x128"
            src={this.props.singleHat.imageUrl}
          />
        </div>
        <div className="card-content has-text-centered">
          <ul>
            <li>Name: {this.props.singleHat.name}</li>
            <li>Description: {this.props.singleHat.description}</li>
            <li>Manufacturer: {this.props.singleHat.manufacturer}</li>
            <li>Price: ${this.props.singleHat.price / 100}</li>
            <li>Quantity: {this.props.singleHat.quantity}</li>
          </ul>
        </div>
        <div className="card-footer has-text-centered">
          <button
            className="button is-primary"
            type="submit"
            onClick={() => this.props.handleClick(this.props.singleHat)}
          >
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
    addHat: () => dispatch(addToCart(ownProps.match.params.id)),
    handleClick: singleHat => dispatch(addToCart(singleHat))
  }
}

export default connect(mSTP, mDTP)(SingleHat)

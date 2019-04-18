import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setSingleHatThunk} from '../store/singleHatReducer'
import Cart from './Cart'

class SingleHat extends Component {
  constructor() {
    super()
    this.addItem = this.addItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.loadSingleHat()
  }

  handleClick(event) {
    event.preventDefault()
    // console.log('you added a hat!')
    // console.log('this in handleClick', this)
    this.addItem()
    // console.log('local storage after clicking', localStorage)
    // add item to cart using localStorage
  }
  
  addItem() {
    // localStorage.setItem('cart', this.props.singleHat);
    localStorage.setItem('cart', JSON.stringify(this.props.singleHat));
    console.log('cart in addItem', localStorage);
    console.log('parsed', JSON.parse(localStorage.getItem('cart')));
  }
  
  render() {
    // console.log('localStorage', localStorage)
    // console.log('this in render', this)
    // console.log('props', this.props.singleHat)
    return (
      <div>
        {/* <Cart /> */}
        <h1>{this.props.singleHat.name}</h1>
        <img src={this.props.singleHat.imageUrl} />
        <ul>
          <li>Name: {this.props.singleHat.name}</li>
          <li>Description: {this.props.singleHat.description}</li>
          <li>Manufacturer: {this.props.singleHat.manufacturer}</li>
          <li>Price: ${this.props.singleHat.price / 100}</li>
          <li>Quantity: {this.props.singleHat.quantity}</li>
        </ul>
        <button type="submit" onClick={this.handleClick}>
          Add to Cart
        </button>
      </div>
    )
  }
}

const mSTP = state => {
  return {
    singleHat: state.singleHatReducer
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    loadSingleHat: () => dispatch(setSingleHatThunk(ownProps.match.params.id))
  }
}

export default connect(mSTP, mDTP)(SingleHat)

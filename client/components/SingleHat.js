import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setSingleHatThunk} from '../store/singleHatReducer'

class SingleHat extends Component {
  componentDidMount() {
    this.props.loadSingleHat()
  }
  render() {
    return (
      <div>
        <h1>This is a single hat</h1>
        <img src={this.props.singleHat.imageUrl} />
        <ul>
          <li>Name: {this.props.singleHat.name}</li>
          <li>Type: {this.props.singleHat.type}</li>
          <li>Description: {this.props.singleHat.description}</li>
          <li>Manufacturer: {this.props.singleHat.manufacturer}</li>
          <li>SKU: {this.props.singleHat.sku}</li>
          <li>Price: ${this.props.singleHat.price}</li>
          <li>Quantity: {this.props.singleHat.quantity}</li>
        </ul>
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

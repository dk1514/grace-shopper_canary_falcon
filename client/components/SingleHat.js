import React, {Component} from 'react'
import {connect} from 'react-redux'
import setSingleHatThunk from '../store/singleHatReducer'

class SingleHat extends Component {
  componentDidMount() {
    this.props.loadSingleHat()
  }
  render() {
    return (
      <div>
        <h1>This is a single hat</h1>
        {/* <ul>
          <li>{this.props.hatinfo.price}</li>

        </ul> */}
      </div>
    )
  }
}

const mSTP = state => {
  // console.log('singlehat', state)
  return {
    singleHat: state.hats
  }
}

const mDTP = (dispatch, ownProps) => {
  return {
    loadSingleHat: () => dispatch(setSingleHatThunk(ownProps.match.params.id))
  }
}

export default connect(mSTP, mDTP)(SingleHat)

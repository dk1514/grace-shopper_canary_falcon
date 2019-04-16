import React, {Component} from 'react'
import {connect} from 'react-redux'
import setSingleHatThunk from '../store/hat'

class SingleHat extends Component {
  render() {
    console.log('state', this)
    return <h1> Here is a single hat!</h1>
  }
}

const mSTP = state => {
  return {
    hat: state.hat
  }
}

export default connect(mSTP)(SingleHat)

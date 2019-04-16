import React, {Component} from 'react'
import axios from 'axios'
import {setHatsThunk} from '../store/hat'
import {connect} from 'react-redux'
import SingleHat from './SingleHat'

class AllHats extends Component {
  componentDidMount() {
    this.props.loadHats()
  }
  render() {
    return (
      <div>
        <h1> Here are all our hats!</h1>
        <ul>
          {this.props.hats.hats.map(hat => (
            <li key={hat.id}>
              <SingleHat />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapSTP = state => {
  return {
    hats: state.hat
  }
}

const mapDTP = dispatch => ({
  loadHats: () => dispatch(setHatsThunk())
})

export default connect(mapSTP, mapDTP)(AllHats)

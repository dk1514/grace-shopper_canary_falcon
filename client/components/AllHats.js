import React, {Component} from 'react'
import axios from 'axios'
import {setHatsThunk} from '../store/hat'
import {connect} from 'react-redux'
import SingleHat from './SingleHat'
import {Link} from 'react-router-dom'

class AllHats extends Component {
  componentDidMount() {
    this.props.loadHats()
  }
  render() {
    return (
      <div>
        <h1> Here are all our hats!</h1>
        <ul>
          {this.props.allHats.hats.map(hat => (
            <li key={hat.id}>
              <Link to={`/hats/${hat.id}`}>
                <ul>
                  <li>{hat.name}</li>
                  <li>{hat.price}</li>
                </ul>
                <img src={hat.imageUrl} alt="hatimage" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapSTP = state => {
  console.log('allhatsstate', state)
  return {
    allHats: state.hat
  }
}

const mapDTP = dispatch => {
  return {
    loadHats: () => dispatch(setHatsThunk())
  }
}

export default connect(mapSTP, mapDTP)(AllHats)

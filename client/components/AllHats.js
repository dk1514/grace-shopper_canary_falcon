import React, {Component} from 'react'
import axios from 'axios'
import {setHatsThunk} from '../store/hat'
import {connect} from 'react-redux'
import SingleHat from './SingleHat'
import {Link} from 'react-router-dom'

export class AllHats extends Component {
  componentDidMount() {
    this.props.loadHats()
  }
  render() {
    return (
      <div id="AllHatsComponent">
        <ul id="hatList">
          {this.props.allHats.hats.map(hat => (
            <li key={hat.id}>
              <Link to={`/hats/${hat.id}`}>
                <h1>{hat.name}</h1>
                <img id="hatImage" src={hat.imageUrl} alt="hatimage" />
                <h1>${hat.price}</h1>
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
    loadHats: () => {
      dispatch(setHatsThunk())
    }
  }
}

export default connect(mapSTP, mapDTP)(AllHats)

import React, {Component} from 'react'
import {setHatsThunk} from '../store/hat'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllHats extends Component {
  componentDidMount() {
    this.props.loadHats()
  }
  render() {
    return (
      <div id="AllHatsComponent">
        <ul id="hatList">
          {this.props.allHats.hats.map(hat => (
            <li key={hat.id}>
              <h1>{hat.name}</h1>
              <Link to={`/hats/${hat.id}`}>
                <img id="hatImage" src={hat.imageUrl} alt="hatimage" />
              </Link>
              <h1>${hat.price / 100}</h1>
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

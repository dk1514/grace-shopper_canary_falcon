import React, {Component} from 'react'
import {setHatsThunk} from '../store/hat'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class AllHats extends Component {

  componentDidMount() {
    this.props.loadHats()
  }

  render() {
    return (
      <div className="columns is-multiline is-centered">
        <div className="column is-5">
          {this.props.allHats.hats.map(hat => (
            <div className='card' key={hat.id}>
              <h1 className='title'>{hat.name}</h1>
              <Link to={`/hats/${hat.id}`}>
                <img src={hat.imageUrl} alt="hatimage" />
              </Link>
              <h1 className='subtitle'>${hat.price / 100}</h1>
            </div>
          ))}
        </div>
        {/* <ul className="column is-5">
          {this.props.allHats.hats.map(hat => (
            <li key={hat.id}>
              <h1 className='title'>{hat.name}</h1>
              <Link to={`/hats/${hat.id}`}>
                <img id="hatImage" src={hat.imageUrl} alt="hatimage" />
              </Link>
              <h1>${hat.price / 100}</h1>
            </li>
          ))}
        </ul> */}
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

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className='navbar'>
      {isLoggedIn ? (
        <div className='navbar-brand'>
          {/* The navbar will show these links after you log in */}
          <Link className='navbar-item' to="/">Home</Link>
          <Link className='navbar-item' to="/hats">Hats</Link>
          <Link className='navbar-item' to="/order-history">Order History</Link>
          <Link className='navbar-item' to="/cart">Shopping Cart</Link>
          <a className='navbar-item' href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className='navbar-brand'>
          {/* The navbar will show these links before you log in */}
          <Link className='navbar-item' to="/">Home</Link>
          <Link className='navbar-item' to="/hats">Hats</Link>
          <Link className='navbar-item' to="/login">Login</Link>
          <Link className='navbar-item' to="/signup">Sign Up</Link>
          <Link className='navbar-item' to="/cart">Shopping Cart</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

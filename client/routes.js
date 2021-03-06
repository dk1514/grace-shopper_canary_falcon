import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Cart from './components/Cart'
import OrderSuccess from './components/OrderSuccess'
import OrderHistory from './components/OrderHistory'
import {FrontPage} from './components/FrontPage'
import AllHats from './components/AllHats'
import SingleHat from './components/SingleHat'
import NotFoundPage from './components/NotFoundPage'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/home" component={FrontPage} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/success" component={OrderSuccess} />
        <Route exact path="/hats" component={AllHats} />
        <Route path="/hats/:id" component={SingleHat} />
        <Route exact path="/" component={FrontPage} />
        <Route component={NotFoundPage} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/order-history" component={OrderHistory} />
            <Route path="/cart" component={Cart} />
            <Route path="/success" component={OrderSuccess} />
            <Route exact path="/hats" component={AllHats} />
            <Route path="/hats/:id" component={SingleHat} />
            <Route exact path="/" component={FrontPage} />
            <Route component={NotFoundPage} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
import AllHats from './components/AllHats'
import SingleHat from './components/SingleHat'
import FrontPage from './components/FrontPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/hats" component={AllHats} />
        <Route path="/hats/:id" component={SingleHat} />
        <Route exact path="/" component={AllHats} />
      </Switch>
    </div>
  )
}

export default App

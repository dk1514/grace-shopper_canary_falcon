import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'
// import AllHats from './components/AllHats'
// import SingleHat from './components/SingleHat'
// import FrontPage from './components/FrontPage'
// import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App

import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllHats from './components/AllHats'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllHats />
    </div>
  )
}

export default App

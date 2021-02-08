import React from 'react'
import HomePage from './pages/Homepage'
import { Route, Switch } from 'react-router-dom'

const HatsPage = () => (

  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  // console.log(process.env.FAST_FRESH)
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/hats' component={ HatsPage } />
      </Switch>
    </div>
  )
}

export default App

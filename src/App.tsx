import React from 'react'
import HomePage from './pages/homepage/Homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop'


function App() {
  // console.log(process.env.FAST_FRESH)
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
      </Switch>
    </div>
  )
}

export default App

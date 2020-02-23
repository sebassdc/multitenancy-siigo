import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Welcome from './views/Welcome'
import SignUp from './views/SignUp'
import Login from './views/Login'
import Store from './views/Store'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/store" component={Store} />
      <SignUp />
    </Switch>
  )
}

export default App

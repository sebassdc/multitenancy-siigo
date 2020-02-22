import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Welcome from './views/Welcome'
import SignUp from './views/SignUp'
import Login from './views/Login'

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <SignUp />
    </Switch>
  )
}

export default App

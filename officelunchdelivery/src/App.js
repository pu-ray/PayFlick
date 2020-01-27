import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Meals from './components/Meals'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Landingpage} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/meals' component={Meals} />
      </Router>
    )
  }
}

export default App
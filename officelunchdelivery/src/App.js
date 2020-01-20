import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Signin from './components/Signin'
import All from './components/All'




class App extends Component {
  render() {
    return (
      <Router>
        
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/all' component={All} />
        

      </Router>
    )
  }
}

export default App
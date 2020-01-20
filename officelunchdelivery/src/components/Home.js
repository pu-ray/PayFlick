import React, { Component } from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Categories from './Categories'
import Catalogue from './Catalogue'
import Footer from './Footer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  addToCart = (product) => {
    if (this.state.cart.indexOf(product) < 0) {
      this.setState(prevState => ({
        cart: prevState.cart.concat(product)
      }))
    }
  }

  removeFromCart = (product) => {
    const index = this.state.cart.indexOf(product)
    if (index >= 0) {
      const cart = this.state.cart
      cart.splice(index, 1)
      this.setState({
        cart: cart
      })
    }
  }

  render() {
    return (
    <div>
      <Navbar cart={this.state.cart} removeFromCart={this.removeFromCart} />
      <Slider/>
      <Categories/>
      <Catalogue addToCart={this.addToCart} />
      <Footer/>
    </div>
      )
  }
}

export default Home
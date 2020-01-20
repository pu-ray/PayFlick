import React, { Component } from 'react'
import img49 from '../assets/img/icon-img/49.png'
import Product from './Product'

class Catalogue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('https://greens-kiosk-api.antonyorenge.com/products')
      .then(response => response.json())
      .then(response => {
        this.setState({
          products: response
        })
      })
  }

  render() {
    return (
      // <div className="product-style-area pt-130 pb-30 wow fadeInUp">
        <div className="container">
          <div className="section-title-furits text-center mb-95">
            {/* <img src={img49} alt="" /> */}
            {/* <h2>More Fresh Products</h2> */}
          </div>
          <div className="row">
            {
              this.state.products.map(product => {
                return (
                  <div key={product.id} className="col-lg-4 col-xl-3 col-md-6">
                    <Product item={product} addToCart={this.props.addToCart} />
                  </div>
                )
              })
            }

          </div>
        </div>
      // </div>
    )
  }
}

export default Catalogue
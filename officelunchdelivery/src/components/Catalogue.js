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
        <div className="container" >
            <h4 style={{marginBottom:40,borderTop:"2px solid #e2e2e2",paddingTop:50}}>Mutton Dishes</h4>

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
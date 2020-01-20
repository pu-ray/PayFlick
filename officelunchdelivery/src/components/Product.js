import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div className="product-fruit-wrapper mb-60">
        {/* <div className="product-fruit-img">
          <img src={this.props.item.imageUrl} alt="" />
          <div className="product-furit-action">
            <a className="furit-animate-left" title="Add To Cart" onClick={() => this.props.addToCart(this.props.item)}>
              <i className="pe-7s-cart"></i>
            </a>
            <a className="furit-animate-right" title="Wishlist" href="#">
              <i className="pe-7s-like"></i>
            </a>
          </div>
        </div> */}
        {/* <div className="product-fruit-content text-center">
          <h4><a href="product-details.html">{this.props.item.name}</a></h4>
          <span>Ksh. {this.props.item.price}</span>
        </div> */}
      </div>
    )
  }
}

export default Product
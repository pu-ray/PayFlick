import React, { Component } from 'react'


class Cart extends Component {
  render() {
    return (
      <ul className="cart-dropdown">
        {
          this.props.cart.map(product => {
            return (
              <li key={product.id} className="single-product-cart">
                <div className="cart-img">
                  <a href="#"><img src={product.imageUrl} alt="" style={{
                    width: '72px',
                    height: '72px'
                  }} /></a>
                </div>
                <div className="cart-title">
                  <h5><a href="#">{product.name}</a></h5>
                  <h6><a href="#">{product.category}</a></h6>
                  <span>Ksh. {product.price}</span>
                </div>
                <div className="cart-delete">
                  <a onClick={() => this.props.removeFromCart(product)}><i className="ti-trash"></i></a>
                </div>
              </li>
            )
          })
        }

        <li className="cart-space">
          <div className="cart-sub">
            <h4>Subtotal</h4>
          </div>
          <div className="cart-price">
            <h4>
              Ksh.
              {
                this.props.cart.length > 0 ?
                  this.props.cart.map(product => product.price).reduce((prev, cur) => prev + cur, 0)
                  :
                  0
              }
            </h4>
          </div>
        </li>

        <li className="cart-btn-wrapper">
          <a className="cart-btn btn-hover" href="#">view cart</a>
          <a className="cart-btn btn-hover" href="#">checkout</a>
        </li>
      </ul>
    )
  }
}
export default Cart
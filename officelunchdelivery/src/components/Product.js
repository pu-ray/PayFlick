import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div className='products'>
        <div className="product-fruit-wrapper mb-60">
        <div className="product-fruit-img">
          <img src={this.props.item.imageUrl} alt="" style={{height:160,width:261}}></img>
          <button className="btn">Ksh. {this.props.item.price}</button>
          <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <p className="text-warning">Product description</p>
          <p ><button style={{marginRight:12}}>-</button>1<button style={{marginLeft:12}}>+</button></p>
          <a href="#">+ Add to order</a>
          </div>
        </div>  
      </div>

          {/* <div className="product-furit-action">
            <a className="furit-animate-left" title="Add To Cart" onClick={() => this.props.addToCart(this.props.item)}>
              <i className="pe-7s-cart"></i>
            </a>
          </div>
         <div className="product-fruit-content text-center">
          <h4><a href="product-details.html">{this.props.item.name}</a></h4>
          <span>Ksh. {this.props.item.price}</span>
        </div>
        <a><i className="pe-7s-cart"></i></a> */}

      </div>
    )
  }
}

export default Product
import React, { Component } from 'react'
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      categories: [],
      selectedCategoryId: 0
    }
  }
  async getCategories() {
    const apiUrl = 'http://lunchbox.co.ke/v1/products/categories/list/';

    return axios.get(`${apiUrl}`)
      .then(res => {
        return res.data.categories;
      })
  }

  // todo
  async getProductsByCategoryId(categoryId) {
    const apiUrl = 'http://lunchbox.co.ke/v1/products/categories/list/';

    return axios.get(`${apiUrl}`)
      .then(res => {
      
        return res.data.categories;
      })
  }

  async componentDidMount() {
    this.init();
  }

  init() {
    this.handleCategories();
  }

  async handleCategories() {
    const categories = await this.getCategories();

    this.setState({ categories });
  }

  // todo create a component for this
  renderProduct(product) {
    return (<div className="product-card card">
      {product.name}
    </div>);
  }

  async onClickSelectCategory() {
    const products = await this.getProductsByCategoryId();
  }

  render() {

    return (

      <div className="product-fruit-wrapper " style={{ backgroundColor: 'white' }}>
        <div className="product-fruit-img">
          <div>
            <img src={this.props.food_product_image} alt="" style={{ height: 210 }} />
            <button className="btnz">Ksh. {this.props.food_product_price}</button>
            <div className="product-furit-action"></div>
            <div className="card-body">
              <h4 className='card-title'><a href="product-details.html">{this.props.food_product_description}</a></h4>
              <span className="text-warning">{this.props.food_product_description}</span> <br />
              <div style={{ marginTop: 15 }}>
                <button style={{ marginRight: 20 }}>-</button>1<button style={{ marginLeft: 20 }}>+</button>
                <br />
                <div style={{ marginTop: 15 }}>
                  <a>+ <a>Add To Cart</a></a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    )

  }
}

export default Product
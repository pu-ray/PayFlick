import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Catalogue from './Catalogue'
import food from './food.svg'
import Product from './Product'
import beef from '.././beef.svg'
import mutton from '.././mutton.svg'
import chicken from '.././chicken.svg'
import fish from '.././fish.svg'
import coffee from '.././coffee.svg'
import meal from '.././meal.svg'
import french from '.././french.svg'
import ca from '.././ca.jpeg'
import profile from '.././profile.jpeg'
import axios from 'axios';


class Meals extends Component {
        defaultCategoryId = null;
        state = {
                filteredProducts: [],
                categories: []
        };
        async getCategories() {
                const apiUrl = 'http://lunchbox.co.ke/v1/products/categories/list/';

                return axios.get(`${apiUrl}`)
                        .then(res => {
                                return res.data.categories;
                        })
        }
        async getProducts(categoryId) {
                const apiUrl = `http://lunchbox.co.ke/v1/products/categories/${categoryId}`;

                return axios.get(`${apiUrl}`)
                        .then(res => {
                                return res.data.categories;
                        })
        }
        async componentDidMount() {
                this.init();
        }
        async handleCategories() {
                const categories = await this.getCategories();

                return this.setState({ categories });
        }

        async handleProducts() {
                const products = await this.getProducts();

                this.setState({ products });
        }

        init() {
                this.handleCategories().then(categories => {
                        debugger;
                        if (categories.length) {
                                // todo put the id from url or slug if you want
                                const defaultCategoryId = categories[0].category_id;

                                this.getProducts(defaultCategoryId);
                        }
                });
        }

        // what function needs to callable from render() it should look like that  functionname = () => {}
        handleProductListByCategoryId = () => {

        }

        categoryList = () => {
                const { categories } = this.state;
                const listItems = categories.map((category, indexOfArray) =>
                        <div key={indexOfArray}>
                                mc
                                
                                
                                <div 
                                        className="clickable category-card card" 
                                        onClick={this.handleProductListByCategoryId(category.category_id)}
                                >
                                        <li>{category.category_name}</li>
                                </div>
                        </div>
                );
                return listItems;
        }

        render() {
                const categoryList = this.categoryList();
debugger
                return (
                        <div>
                                <categoryList></categoryList>
                        </div>
                );
        }
        render2() {
                return (
                        <div className="full">
                                <div className="center">
                                        <div className="search ">
                                                <div className="input-icons">
                                                        <i className="fa fa-search icon">
                                                        </i>
                                                        <input className="input-field" type="text" placeholder="Search for meals and drinks" />
                                                </div>
                                                <div className="cat">
                                                        <i className="fa fa-shopping-cart " ></i>
                                                </div>
                                                <img src={profile}
                                                        style={{ marginTop: -60, marginRight: 250, borderRadius: 190, border: "2px solid orange", float: "right" }}></img>
                                        </div>
                                        <div className="row">
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', borderRadius: 20, width: 115, height: 155, marginRight: 12, padding: '15px 0px 0px 25px' }}>
                                                        <img src={meal}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Combos</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', borderRadius: 20, width: 115, height: 155, marginRight: 12, padding: '15px 0px 0px 25px', marginLeft: 30 }}>
                                                        <img src={mutton}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingLeft: 6, paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Mutton</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', borderRadius: 20, width: 115, height: 155, marginRight: 0, padding: '15px 0px 0px 25px', marginLeft: 30 }}>
                                                        <img src={beef}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingLeft: 2, paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Beef</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', borderRadius: 20, width: 115, height: 155, marginRight: 19, marginLeft: -70, padding: '15px 0px 0px 25px', marginLeft: 30 }}>
                                                        <img src={chicken}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingLeft: 6, paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Chicken</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', borderRadius: 20, width: 115, height: 155, marginRight: 12, marginLeft: 30 }}>
                                                        <img src={fish}
                                                                style={{ width: 60, height: 60, padding: '15px 0px 0px 25px' }}></img>
                                                        <h5 style={{ paddingTop: 15, paddingLeft: 20, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Fish</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', width: 115, borderRadius: 20, height: 155, marginRight: 12, padding: '15px 0px 0px 25px', marginLeft: 30 }}>
                                                        <img src={french}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingLeft: 10, paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Sides</h5>
                                                </div>
                                                <div className="product-fruit-img" style={{ backgroundColor: 'white', width: 115, borderRadius: 20, height: 155, marginRight: 12, padding: '15px 0px 0px 25px', marginLeft: 30 }}>
                                                        <img src={coffee}
                                                                style={{ width: 50, height: 50 }}></img>
                                                        <h5 style={{ paddingLeft: 6, paddingTop: 15, fontFamily: "Gill Sans", fontSize: 20, fontWeight: 400, width: 70, height: 24 }}>Drinks</h5>
                                                </div>

                                        </div>
                                </div>





                                <Product />
                        </div>


                )
        }
}

export default Meals
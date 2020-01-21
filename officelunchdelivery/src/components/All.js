import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Product from './Product'
import { MDBCol, MDBIcon } from "mdbreact";
import Catalogue from './Catalogue';
import food from './food.svg'
class All extends Component {
    render() {
        return (
            <div className='container' style={{marginTop:20}}>
                <MDBCol md="9">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3" id="basic-text1">
                    <i class="fas fa-search"></i>
                    </span>
                    </div>
                    <input className="form-control my-0 py-1" type="text" placeholder="Search meals or drinks" aria-label="Search" />
                </div>
                </MDBCol>

                <div className="container" style={{marginTop:40,marginBottom:90}}>
                <div className="row col-9">
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                     Beef
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'orange',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    Mutton
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    Chicken
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    MixBBQ
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    Fish
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    RiceDishe
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    Sides
                    </div>
                    <div className="col-sm rounded" style={{backgroundColor:'white',width:85,height:120,marginRight:20}}>
                    <img src={food} alt='image' style={{paddingTop:25}}/>
                    Drinks
                    </div>
                </div>
                </div>
                <Catalogue/>
                
            </div>         
        )
      }
    }
    
    export default All
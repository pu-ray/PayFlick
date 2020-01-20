import React, { Component } from 'react'
import imgi from '../assets/img/slider/i.jpg'
import img22 from '../assets/img/logo/22.png'
import img12 from '../assets/img/slider/12.png'
import { Link} from 'react-router-dom'
import bg from '../i.jpg'
class Slider extends Component {
  render() {
    return (
      // <div className="slider-area">
      // <div className="slider-active-2"> 
          // <div className="single-slider-4 bg-img furits-slider">
          
              <div className="container">
                  {/* <div className="fadeinup-animated furits-content text-center"> */}
                      {/* <img className="animated" src={img12} alt=""/> */}
                      {/* <p className="animated">Health is not about the weight you lose. But about the life you gain!</p> */}
                      
                      <div className = "buttons">
                      {/* <img className="animated slide-img-position" src={img22} alt=""/>
                      <br></br> */}
                      <a className="furits-slider-btn btn-hover animated"><Link to='/signup'>Sign Up</Link></a
                      >
                      <br></br>
                      <br></br>
                      <br></br>
                      <a className="furits-slider-btn btn-hover animated"><Link to='/signup'>Create your accountL</Link></a>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a className="furits-slider-btn btn-hover animated"><Link to='/all'>Browse Meals</Link></a>
                     </div>
                  </div>
          //    </div>
          // </div>
          // </div>
          // </div>
    )
  }
}

export default Slider
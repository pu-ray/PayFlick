import React, { Component } from 'react'

import { Link} from 'react-router-dom'

class Landingpage extends Component {
    render() {
      return (
        <div className="bg-image" style={{height:"945px"}}> 
        <div className="bg-text">
        <div className ="col">
        <div className ="col" style={{width:400,margin:'0 auto'}}>
            <h1 style={{fontSize:"50px",color:'white',border:'5px solid #fd7703',
            padding:'30px  0px',marginTop:90,fontWeight:'bold',marginBottom:60}}>LUNCHBOX</h1>
        </div>
          
        <div className ="col rounded" style={{width:370,margin:'0 auto',backgroundColor:'#fd7703',height:80,}}>
            <h3 style={{color:'white',paddingTop:23}}><Link to='/signup'>Sign In</Link></h3>
        </div>

        <br/>

        <div className ="col rounded" style={{width:370,margin:'0 auto',backgroundColor:'#fd7703',height:80}}>
            <h3 style={{color:'white',paddingTop:23}}><Link to='/signup'>Create your Account</Link></h3>
        </div>

        <br/>
        <div style={{width:370,margin:'0 auto',height:150}}>
            <h6 style={{color:'#fd7703',paddingTop:45,fontSize:'23px'}}><Link to='/meals'>Browse Meals</Link><span style={{paddingLeft:10}}>
            <i className="fa fa-arrow-right" style={{color:'#fd7703',fontSize:"20px",}}></i></span></h6>
            
        </div>

        </div>
        </div>
       </div> 
      )
    }
  }
  
  export default Landingpage
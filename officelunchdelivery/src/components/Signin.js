import React, { Component } from 'react'

import { Link} from 'react-router-dom'

class SignIn extends Component {
    render() {
      return (
          <div className="bg-image" style={{height:"945px"}}>
             <div className="bg-textys">
                 <div className ="col" style={{width:340,height:110,margin:'0 auto'}}>
                    <h1 style={{fontSize:"30px",color:'white',border:'5px solid #fd7703',
                        padding:'20px  0px',marginTop:50,fontWeight:'bold',marginBottom:70}}>LUNCHBOX</h1>
             </div>
            
             <div className="form-group rounded" style={{width:492,borderRadius:"5px",paddingTop:20,height:65,margin:'0 auto'}}>
                    <textarea type="name" placeholder="Mobile Number" ></textarea>
             </div>
             
             <div className="form-group rounded" style={{width:492,height:65,borderRadius:"5px",margin:'0 auto',paddingTop:50}}>
              <textarea type="name" type="password" placeholder="Password"/>
              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>
            

            <div className ="col rounded" style={{width:290,margin:'0 auto',backgroundColor:'#fd7703',height:80,marginTop:100}}>
            <h3 style={{color:'white',paddingTop:24,fontSize:23}}><Link to='/meals'>Sign In</Link></h3>
            </div>
            <br/> 
            <br/>            

            
            <p class="change_link" style={{paddingTop:70,color:"white"}}>
					Do you have an account ?
					<a href="#tologin" class="to_register" style={{color:'#fd7703'}}> Sign Up </a>
			</p>
             </div>
          </div>
      )
    }
  }
  
  export default SignIn
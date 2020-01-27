import React, { Component } from 'react'

import { Link} from 'react-router-dom'

class SignUp extends Component {
    render() {
      return (
          <div className="bg-image col-md-12" style={{height:"945px"}}>
             <div className="bg-texty">
                 <div className ="col" style={{width:340,height:110,margin:'0 auto'}}>
                    <h1 style={{fontSize:"30px",color:'white',border:'5px solid #fd7703',
                        padding:'20px  0px',marginTop:50,fontWeight:'bold',marginBottom:70}}>LUNCHBOX</h1>
             </div>
             <div className="form-group rounded" style={{width:492,height:65, borderRadius:"5px",paddingTop:50,margin:'0 auto'}}>
                    <textarea type="name" placeholder="Name" />
             </div>
             <div className="form-group rounded" style={{width:492,height:65, borderRadius:"5px",paddingTop:70,margin:'0 auto'}}>
                    <textarea type="name" placeholder="Mobile Number"/>
             </div>
             <div className="form-group rounded" style={{width:492,height:65,borderRadius:"5px",margin:'0 auto',paddingTop:78,border:"1px white"}}>
                    <textarea type="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
             </div>
             <div className="form-group rounded" style={{width:492,height:65,borderRadius:"5px",margin:'0 auto',paddingTop:78}}>
              <textarea type="name" type="password" placeholder="Password"/>
              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
            </div>
            
            <div className ="col rounded" style={{width:290,margin:'0 auto',backgroundColor:'#fd7703',height:80,marginTop:100}}>
            <h3 style={{color:'white',paddingTop:24,fontSize:23}}><Link to='/signin'>Sign Up</Link></h3>
            </div>
            <br/> 
            <br/>            

            
            <p class="change_link" style={{paddingTop:70,color:"white"}}>
					     Already a member ?
					  <a href="#tologin" class="to_register" style={{color:'#fd7703'}}> Sign in </a>
			      </p>
             </div>
          </div>
      )
    }
  }
  
  export default SignUp
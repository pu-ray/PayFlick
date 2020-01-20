import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link} from 'react-router-dom'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        email:"",
        mobilenumber:"",
        password:''
        }
       }

    render() {
    return (
      
    <div className = " container">
        <div className = "signup">
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Signup"
           /> */}
           <br></br>
           <br></br>
           <br></br>
           <br></br>
  
           <TextField 
              style={{
                border:"5px  solid green",
                width:"600px"
               
                
            }}
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <br/>
           <br/>
           <br/>
           <TextField

               style={{
                border:"5px  solid green",
                width:"600px"
               
                
            }}
             hintText="Enter your email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
          
           <br/>
           <br/>
           <br/>
           <br/>
           <TextField
           style={{
            border:"5px  solid green",
            width:"600px"
           
            
        }}
             hintText="Enter your phone number"
             floatingLabelText="Phonenumber"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <br/>
           <br/>
           <br/>
             <TextField
             style={{
              border:"5px  solid green",
              width:"600px"
             
              
          }}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <br/>
             <br/>
             <br/>
  
            <a className="furits-slider-btn btn-hover animated"><Link to='/signin'>Sign Up</Link></a>
             {/* <a><Link to='/signin'>Sign In</Link></a> */}
             
         </div> 
         </MuiThemeProvider>
      </div>
      </div>
      
    );
  }
}
const style = {
 
};  
     
    



export default Signup
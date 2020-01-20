import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link} from 'react-router-dom'


export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
        mobilenumber:"",
        password:''
        }
       }
    render() {
    return (
      
    <div className = "container signup">
      
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Signup"
           /> */}
           <TextField 
              style={{
                border:"1px  solid orange",
               
                
            }}
            //  hintText="Enter your Username"
            //  floatingLabelText="Username"
            //  onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           {/* <TextField
             hintText="Enter your email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             /> */}
           <br/>
           <TextField
             hintText="Enter your phone number"
             floatingLabelText="Phonenumber"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <a className="furits-slider-btn btn-hover animated"><Link to='/all'>Sign In</Link></a>
             {/* <RaisedButton label="Sign in" style={style}></RaisedButton> */}
         </div>
         </MuiThemeProvider>
      </div>
      
    );
  }
}
const style = {
 
};
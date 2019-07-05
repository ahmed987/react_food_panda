import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {FormGroup, FormText, Col,  Input} from 'reactstrap';
import firebase from "./config/firebase";
import "firebase/auth";
import Signup from './Component/Signup';
import SignupResturant from './Component/SignupResturant'
import Login from './Component/login'
import UserView from './screens/userView'
import AppRouter from './config/router'
import Dashboard from './screens/Dashboard';
import DataRendering from './Component/dataRendering';
import GettingData from './Component/gettingData'
// import GoogleMaps from './Component/googleMap'
class App extends Component {
  state = { isLogin:'' }

   
  
  render() { 
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log("user"+user)
  
      }
      else{
  
        console.log(" no user"+user)
  
      }
    })
    console.log(this.state.isLogin)
    return ( 
      <div className="App">
        {/* <UserView /> */}
 <GettingData />
        {/* <Login  /> */}
                                                      {/* <AppRouter /> */}
   {/* <DataRendering /> */}
        {/* <SignupResturant /> */}
        {/* <Signup /> */}
{/* <GoogleMaps /> */}
      </div>
     );
  }
}
 
export default App
;


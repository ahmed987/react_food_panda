import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {FormGroup, FormText, Col,  Input} from 'reactstrap';
import firebase from "../config/firebase";
import "firebase/auth";
class Signup extends Component {


  constructor(props){
    super(props);
    this.path = firebase.database().ref().child('users');
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.state = {
        fullName:'',
        email:'',
        gender:'',
        age:'',
        country:'',
        city:'',
        password:'',
        cnfrmPassword:'',
    }
}

handleChange(e){
    this.setState({[e.target.name]:e.target.value});
}

handleSignup(){
    firebase.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=> {
        this.path.child(`${user.user.uid}`).set({
            info:{
                fullName: this.state.fullName,
                email: this.state.email,
                gender:this.state.gender,
                age:this.setState.age,
                country:this.state.country,
                city:this.state.city
            }
        })
        alert("congo")
        console.log("donnnnnnnnnnnne")
        // window.location = '/'
    })
    .catch((error)=> alert(error))
}
render() {
return (
    <Col sm={{size:'10', offset:'1'}} md={{size:'6', offset:'3'}}>

    <div style={{margin:'10px auto', width:'80%'}}>
    <h1 style={{fontWeight:'300', marginBottom:'30px', marginTop:'20px'}}>Create New Account</h1>
<FormGroup>
    <Input onChange={this.handleChange} value = {this.state.fullName} type="text" name="fullName" placeholder="Full name" required/>
</FormGroup>

<FormGroup>
  <Input onChange={this.handleChange} value = {this.state.email} type="email" name="email" id="email" placeholder="Email" required/>
</FormGroup>

<FormGroup>
    <Input onChange={this.handleChange} value = {this.state.gender} type="text" name="gender" placeholder="gender" required/>
</FormGroup>

<FormGroup>
    <Input onChange={this.handleChange} value = {this.state.age} type="text" name="age" placeholder="age" required/>
</FormGroup>

<FormGroup>
    <Input onChange={this.handleChange} value = {this.state.country} type="text" name="country" placeholder="country" required/>
</FormGroup>

<FormGroup>
    <Input onChange={this.handleChange} value = {this.state.city} type="text" name="city" placeholder="city" required/>
</FormGroup>

<FormGroup>
  <Input onChange={this.handleChange} value = {this.state.password} type="password" name="password" id="password" placeholder="Password" required />
</FormGroup>

<FormGroup>
  <Input onChange={this.handleChange} value = {this.state.cnfrmPassword} type="password" name="cnfrmPassword" id="cfrmpassword" placeholder="Confirm Password" required />
</FormGroup>


<FormGroup className="text-right">
    <Button onClick={this.handleSignup}>Register</Button>
</FormGroup>


</div>
</Col>
)
}

}
 
export default Signup;



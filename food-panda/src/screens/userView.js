import React from 'react';
import firebase from '../config/firebase';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Col, FormGroup, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signup from '../Component/Signup'
import DataRendering from '../Component/dataRendering'
import UserPending from '../Component/UserPending'
import Inprogress from '../Component/Inprogress'
import Deliverd from '../Component/Deliverd'
import Login from '../Component/login'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,CardGroup,CardHeader } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  handlelogOut() {
    firebase.auth().signOut()
        .then(() => {
            localStorage.setItem("user", JSON.stringify({ user: "null" }))


            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            console.log(message)
            // An error happened.
        });
}
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Food Panda</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Resturants</NavLink>
                <Button color='link'  onClick={this.handlelogOut} id="logout" >Logout</Button>
              </NavItem>
              <NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Router>
        
        <h2>Welcome to Food delivery App</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            {/* <li><Link to={'/Signup'} className="nav-link"> SignUp</Link></li> */}
            {/* <li><Link to={'/datarender'} className="nav-link">DATA RENDER</Link></li>  */}
            
            <li><Link to={'/Userview'} className="nav-link"> Home</Link></li>
             <li><Link to={'/UserPending'} className="nav-link">pending</Link></li> 
            <li><Link to={'/deliver'} className="nav-link">Deliverd</Link></li>
            <li><Link to={'/inprogress'} className="nav-link">In Progress</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route  path='/Signup' component={Signup} />
              <Route path='/deliver' component={Deliverd} />
              <Route path='/inprogress' component={Inprogress} />
              <Route path='/UserPending' component={UserPending} />
              <Route path='/datarender' component={DataRendering} />
          </Switch>
          </Router>
         
          
    <div className="pics"  >
      <Card>
      <CardHeader tag="h2">Featured</CardHeader>
        <CardImg top width="100%" src=" https://2.bp.blogspot.com/-TaPDKEaTIZA/W8Ws7uowIEI/AAAAAAAAWc4/7XYBgsH5vhU9ejvhK8aLT82LUREZf-83QCLcBGAs/s1600/The%2Bvalley%2Brestaurant%2Bkarachi.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">Sizllers</CardTitle>
          <CardSubtitle >Gulshan iqbal</CardSubtitle>
          <CardText >2 Zinger + pepsi</CardText>
          <Button>deliverd</Button>
          <hr/>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://images.happycow.net/venues/1024/11/58/hcmp115804_376518.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">Kebabi</CardTitle>
          <CardSubtitle>Gulshan</CardSubtitle>
          <CardText>1 Mutton karhai</CardText>
          <Button>Deliverd</Button>
          <hr/>
        </CardBody>
      </Card>
      <Card>
      <CardImg top width="100%" src="https://pakistani.pk/uploads/reviews/photos/thumbnail/1500x500s/40/53/40/12274481-764749013653258-53057526924446921-n-94-1448988347.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">Dua resturant</CardTitle>
          <CardSubtitle>highway</CardSubtitle>
          <CardText>2 behari boti</CardText>
          <Button>Deliverd</Button>
          <hr/>
        </CardBody>
      </Card>

    </div>

      </div>
    );
  }
}
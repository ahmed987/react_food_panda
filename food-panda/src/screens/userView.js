import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Signup from '../Component/Signup'
import UserPending from '../Component/UserPending'
import DataRendering from '../Component/dataRendering'
import Inprogress from '../Component/Inprogress'
import Deliverd from '../Component/Deliverd'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
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
                  <li><Link to={'/UserPending'} className="nav-link">pending</Link></li>

            <li><Link to={'/deliver'} className="nav-link">Deliverd</Link></li>
            <li><Link to={'/inprogress'} className="nav-link">In Progress</Link></li>
            <li><Link to={'/datarender'} className="nav-link">DATA RENDER</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              {/* <Route exact path='/' component={Signup} /> */}
              <Route path='/deliver' component={Deliverd} />
              <Route path='/inprogress' component={Inprogress} />
              <Route path='/UserPending' component={UserPending} />
              <Route path='/datarender' component={DataRendering} />
          </Switch>
          </Router>
      </div>
    );
  }
}
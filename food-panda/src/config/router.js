import React from "react";
import Signup from '../Component/Signup';
import SignupResturant from '../Component/SignupResturant'
import Login from '../Component/login'    
import UserView from '../screens/userView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function UserView1() {

return <div>

      <UserView />
  </div>;
}

function login1() {
    return <div><Login /></div>;
  }

function userSignup1() {
  return <div><Signup /></div>;
}

function resturantSignUp1() {
  return <div>
<resturantSignUp1 />
  </div>;
}

function AppRouter() {
    
  return (
    <Router>
      <div>

        <Route path='/' component={UserView1} />
        <Route path="/userSignup1/" component={userSignup1} />
        <Route path="/resturantSignUp1/" component={SignupResturant} />
        <Route path="/login1/" component={login1} />
        
        <nav>
          <ul>
            <li>
              <Link to="/">UserView</Link>
            </li>
            <li>
              <Link to="/login1">Login</Link>
            </li>
            <li>
              <Link to="/userSignup1/"> User Signup </Link>
            </li>
            <li>
              <Link to="/resturantSignUp1/">Resturant SignUp</Link>
            </li>
          </ul>
        </nav>
</div>
    </Router>
  );
}

export default AppRouter;
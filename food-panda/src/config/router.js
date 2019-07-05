import React from "react";
import Signup from '../Component/Signup';
import SignupResturant from '../Component/SignupResturant'
import Login from '../Component/login'    
import UserView from '../screens/userView'
import UserPending from '../Component/UserPending'
import Inprogress from '../Component/Inprogress'
import Deliverd from '../Component/Deliverd'
import DataRendering from '../Component/dataRendering'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GettingData from '../Component/gettingData'
function AppRouter() {
    
  return (
    <div>
          <Router>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            {/* <li><Link to={'/'} className="nav-link"> Login</Link></li> */}
            {/* <li><Link to={'/Signup'} className="nav-link"> SignUp</Link></li> */}
             {/* <li><Link to={'/UserPending'} className="nav-link">pending</Link></li>
            <li><Link to={'/deliver'} className="nav-link">Deliverd</Link></li>
            <li><Link to={'/inprogress'} className="nav-link">In Progress</Link></li> */}
            {/* <li><Link to={'/datarender'} className="nav-link">DATA RENDER</Link></li>  */}
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
              <Route path='/Userview' component={UserView} />
              
          </Switch>
          </Router>
    </div>
  );
}

export default AppRouter;
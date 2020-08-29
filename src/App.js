import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import NavBarFromDashboard from './components/NavBarFromDashboard';
//
//Add the components for the Routing
import HomeDashboard from './components/HomeDashboard';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Pricing from './components/Pricing';
import LogIn from './components/LogIn';
import FavoritesCities from './components/FavoritesCities';
import Err from './components/Err';
import LogOut from './components/LogOut';
//

function App() {
  return (
    <div>
      <NavBarFromDashboard />
      <Switch>
        <Route path='/' exact>
          <HomeDashboard />
        </Route>
        <Route path='/favorites' component={FavoritesCities} />
        <Route path='/about' component={AboutUs} />
        <Route path='/signup' component={SignUp} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/login' component={LogIn} />
        <Route component={Err} />
      </Switch>
    </div>
  );
}

export default App;

/* <Route path='/logout' component={LogOut} /> */
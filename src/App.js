import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBarFromDashboard from './components/NavBarFromDashboard';
//Add the components for the Routing
import HomeDashboard from './components/HomeDashboard';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Pricing from './components/Pricing';
import LogIn from './components/LogIn';
import FavoritesCities from './components/FavoritesCities';
import Err from './components/Err';
import PrivateRoute from './components/Authenticator';
import LogOut from './components/LogOut';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      
    }
  }
  
  render() {

    return (
      <div>
        <NavBarFromDashboard />
        <Switch>
          <Route path='/' exact>
            <HomeDashboard />
          </Route>
          <PrivateRoute path='/favorites'>
            <FavoritesCities /> 
          </PrivateRoute>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/signup'>
          <SignUp />
          </Route>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/logout'>
            <LogOut />
          </Route>
          <Route>
            <Err />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from './LogOut'
import { Redirect } from 'react-router-dom';


class NavBarFromDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      navigate: false
    }
  }
  
  logoutUser = () => {
    localStorage.clear('token'); // Token???
    this.setState({ nativagate: true })
  }

  render() {
    const accuweather = { logo: 'https://downloads.accuweather.com/assets/images/logo_v2.png' }
    const { navigate } = this.state

    if (navigate) {
      return(
        <Redirect to="/" push={ true } />
      )
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Global Weather <span style={{ fontSize: 10 + "px" }}>powered by </span><img style={{ width: 100 + "px", color: "white" }} src={accuweather.logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/pricing">Pricing</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link onClick={this.logoutUser}>
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBarFromDashboard;

// eventKey={2}
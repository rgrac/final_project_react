import React from 'react';
import { Redirect } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

class LogOut extends React.Component {
    constructor() {
        super();
        this.state={
            navigate: false
        }
    }

    logoutUser = () => {
        localStorage.clear('token'); // Token???
        this.setState({ nativagate: true })
    }

    render() {
        const { navigate } = this.state
        if (navigate) {
            return(
                <Redirect to="/" push={ true } />
            )
        }

        return null
    }

}

export default LogOut
        //     <Nav.Link eventKey={2} href="/logout" onClick={this.logoutUser}>
        //     Log Out
        //   </Nav.Link>
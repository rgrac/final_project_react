import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';
import './allPurpose.css'

class LogIn extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            message: '',
            user: '',
            redirect: ''
        }
    }

    textInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    logInUser = () => {
        const { username, password } = this.state;
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    this.setState({ message: data.message })
                } else if (data.user) {
                    this.setState({ user: data.user, redirect: data.redirect })
                    localStorage.setItem(
                        "loggedInUser", JSON.stringify(this.state.user))
                }
                let userlogged = JSON.parse(localStorage.getItem('loggedInUser'))
                let userName = userlogged[0].username
                alert(`Welcome back ${userName}!`)

            })
    }

    render() {
        const { redirect, message } = this.state;
        if (redirect) {
            return <Redirect to={redirect} />
        }


        return (
            <div className={"logInBox"}>
                {message}
                <Form>
                    <Form.Label className={"logInText"}>Log In</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={"userInputs"}>User Name</Form.Label>
                        <Form.Control type="username" name='username' placeholder="Enter username" onChange={this.textInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={"userInputs"} >Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={this.textInput} />
                    </Form.Group>
                    <Button style={{backgroundColor: "#e74c3c", color: "#fff", outline: "none", textTransform: "uppercase", cursor: "pointer", borderStyle: "none" }} variant="primary" onClick={this.logInUser}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export function isLoggedIn() {
    return localStorage.getItem("loggedInUser")
}

export default LogIn;

// style={{ width: 300 + "px", margin: 10 + "px", border: 2 + "px solid", padding: 5 + "px", borderRadius: 2 + "%" }}
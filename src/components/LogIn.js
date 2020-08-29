import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    textInput = (e) => {
        console.log('name is: ', e.target.name,' value is: ', e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    logInUser = () => {
        const {username, password} = this.state;
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
            console.log(data)
            if (data.message) {
                this.setState({message: data.message})
            } else if (data.user) {
                this.setState({redirect: data.redirect, user: data.user, message: data.message})
            }
            
        })
    }
    render(){
        const {redirect, message} = this.state;
        if (redirect) {
            return <Redirect to = {redirect} />
        }

        return (
            <div style={{ width: 300 + "px", margin: 10 + "px", border: 2 + "px solid", padding: 5 + "px" }}>
                {message}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="username" name='username' placeholder="Enter username" onChange={this.textInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={this.textInput} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.logInUser}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LogIn;
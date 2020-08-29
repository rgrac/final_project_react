import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';


class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email:'',
            password: '',
            user: null
        }
    }

    textInput = (e) => {
        console.log('name is: ', e.target.name,' value is: ', e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    sendInfo = () => {
        const {username, email, password} = this.state;
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email,password
            })
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({redirect: data.redirect, user: data.user})
        })
    }

    render(){

        const {redirect} = this.state
        if (redirect) {
            return <Redirect to = {redirect} />
        }
        return (
            <div style={{width: 300+"px", margin: 10+"px", border: 2+"px solid", padding: 5+"px"}}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="username" name='username' placeholder="Enter username" onChange={this.textInput} />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" onChange={this.textInput} />
                        <Form.Text className="text-muted" style={{fontSize:10+'px'}}>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={this.textInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" style={{fontSize:14+'px'}} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.sendInfo}>
                        Submit
                    </Button>
                </Form>
            </div>
        )

    }
}

export default SignUp
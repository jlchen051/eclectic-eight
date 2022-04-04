import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import './SignInForm.css'
import {Form, Button} from 'react-bootstrap';

function SignInForm({Login, error, loginSuccessful}) {
    const [validated, setValidated] = useState(false);
    const [details, setDetails] = useState({email: "", password: ""});

    const navigate = useNavigate();

    useEffect(() => {
        // Get existing profile info from API
        console.log("details", details);
        Login(details);
        console.log("loginSuccessful", loginSuccessful);
        
    }, [details]);

    useEffect(() => {
        if(loginSuccessful){
            console.log("here");
            navigate('/home');
        }
    }, [loginSuccessful]);

    const onFormSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
        setDetails(formDataObj);
    }

    return(
        <>
            <div className="signin-page-container d-flex justify-content-center align-items-center flex-wrap">
                <Form className="sign-in-form mx-auto text-light" noValidate validated={validated} onSubmit={onFormSubmit}>
                    <Form.Text className="sign-in-description text-info">
                        <h1 className="sign-in-header text-center">Welcome Back!</h1>
                        <p className="sign-in-message text-primary">
                            Already have an account? Sign in below. <a className="new-account-button" href="/register">Or create a new account here.</a>
                        </p>
                    </Form.Text>    
                    <Form.Group className="mb-3 " controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required 
                            type="email"  
                            name="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            name="password"
                            placeholder="Password" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRememberMe">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Form.Text>
                        <p className="issue-reminder-text text-light">Trouble logging in? Make sure browser cookies and JavaScript are enabled.</p>
                    </Form.Text>
                    <Button className="submit-button w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                    <div style={{display: error == "Email does not exist" ? "block" : "none"}} className="error">
                        Email does not exist.
                    </div>
                    <div style={{display: error == "Incorrect password" ? "block" : "none"}} className="error">
                        Incorrect password.
                    </div>
                </Form>
            </div>
        </>
    );
}

export default SignInForm;
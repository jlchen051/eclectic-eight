import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

import './RegisterForm.css';
import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap';

const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    organization: "",
    passwordInput: ""
};

function RegisterForm() {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false);
    
    const navigate = useNavigate();

    let state = initialState;

    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);

        const formData = new FormData(e.target),
                formDataObj = Object.fromEntries(formData.entries());
        state = formDataObj;
        
        console.log(formDataObj);
        console.log(form.checkValidity());
        console.log(state);
        
        // Send POST request to 'users/create' endpoint
        axios
        .get('http://localhost:4001/users/all')
        .then(response => {
            console.log(response.data)
            var userExists = false;
            response.data.map((user) => {
                if(user.email == formDataObj.email) {
                    console.log("User already exists")
                    setError(true)
                    userExists = true;
                }
            })
            if(!userExists) {
                axios
                    .post('http://localhost:4001/users/create', {
                        fname: formDataObj.firstName,
                        lname: formDataObj.lastName,
                        username: formDataObj.username,
                        email: formDataObj.email,
                        organization: formDataObj.organization,
                        password: formDataObj.passwordInput,
                        // mentor: formDataObj.mentor
                    })
                    .then(res => {
                    console.log(res.data)
                    if(form.checkValidity() === true){
                        navigate('/register-success');
                    }
                    })
                    .catch(error => console.error(`There was an error creating the user: ${error}`))
            }
        })
        .catch(error => console.error(`There was an error retrieving the book list: ${error}`))
        
        
    };

    return(
        <>
            <div className="register-page-container d-flex justify-content-center align-items-center flex-wrap">
                <Form className="register-form mx-auto text-light" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Text className="register-description text-info">
                        <h1 className="register-header">Sign Up</h1>
                        <p className="register-message">
                            It's quick and easy! Join our mentorship program today.
                        </p>
                    </Form.Text>
                    <Form.Text className="sign-in-description text-light">
                        <p className="sign-in-message text-primary">
                                Already have an account? <a className="sign-in-button" href="/sign-in"> Log in here.</a>
                        </p>
                    </Form.Text>
                    <Row className="mb-3">
                        <Form.Group className="margin-bottom" as={Col} md="4" controlId="validationCustomFirstName">
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="margin-bottom" as={Col} md="4" controlId="validationCustomLastName">
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="margin-bottom" as={Col} md="6" controlId="validationCustomEmail">
                            <Form.Control
                                required  
                                type="email"
                                name="email"
                                placeholder="Email address" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustomOrganization">
                            <Form.Control
                                required  
                                type="text"
                                name="organization"
                                placeholder="Organization/Institution" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid organization.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="margin-bottom" as={Col} md="6" controlId="validationCustomPassword">
                            <Form.Control 
                                required
                                type="password" 
                                name="passwordInput"
                                placeholder="Password" 
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Check type="checkbox" label="Signing up as a Mentor" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="10">
                            <Form.Check 
                                className="mb-2"
                                required
                                label={<label>I confirm that I have read, consent and agree to Tech Alpharetta's <a className="agreement-button" href='https://en.wikipedia.org/wiki/End-user_license_agreement' rel="noreferrer" target="_blank">User Agreement</a> and <a className="policy-button" href='https://en.wikipedia.org/wiki/Privacy_policy' rel="noreferrer" target="_blank">Privacy Policy</a>, and I am of legal age.</label>}
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="12">
                            <Button className="submit-button mb-2" type="submit" 
                            >Sign Up</Button>
                            <div style={{display: error ? "block" : "none"}} className="error">User already exists</div>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default RegisterForm;
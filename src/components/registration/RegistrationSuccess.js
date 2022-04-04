import React from 'react';

import {Button} from 'react-bootstrap';

function RegistrationSuccess() {
    return(
        <>
            <div className="register-success-wrapper d-flex justify-content-center align-items-center flex-wrap">
                <div className="custom-jumbotron p-4 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Welcome Aboard!</h1>
                        <p className="col-md-8 fs-4">Congratulations on taking your first step in becoming a future technologist. </p>
                        <p className="col-md-8 fs-4">
                            We are happy to have you be a part of our mentorship program family.
                        </p>
                        <p className="col-md-9 fs-6">
                            Sign in to get started.
                        </p>
                        <Button className="btn btn-primary btn-lg" type="button" href="/sign-in">Sign In</Button>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default RegistrationSuccess;
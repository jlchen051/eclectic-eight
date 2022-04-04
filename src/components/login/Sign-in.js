import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SignInForm from './SignInForm';

function SignIn() {
    // const adminUser = {
    //     email: "admin@admin.com",
    //     password: "admin123"
    // }

    const [user, setUser] = useState({email: ""});
    const [username, setUsername] = useState("");
    const [lastname, setLastName] = useState("");
    const [error, setError] = useState("");
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    useEffect(() => {
        if(loginSuccessful) {
            window.sessionStorage.setItem('user', 1);
            window.sessionStorage.setItem('username', username);
            window.sessionStorage.setItem('lastname', lastname);
            console.log({user});
            console.log("Login Success");
        }
    });

    const Login = details => {
        console.log(details);

        axios
        .get('http://localhost:4001/users/all')
        .then(response => {
            console.log(response.data)
            response.data.map((user) => {
                if(user.email == details.email) {
                    if(details.password === user.password) {
                        setError("");
                        // login successful
                        setUser({
                            email: details.email
                        });
                        setUsername(user.fname);
                        setLastName(user.lname);
                        // CurrUser(user);
                        setLoginSuccessful(true);
                        
                    }
                    else {
                        // wrong password
                        setLoginSuccessful(false);
                        setError("Incorrect password");
                    }
                }
                else {
                    // email does not exist
                    setLoginSuccessful(false);
                    setError("Email does not exist");
                }
            })
        })
        .catch(error => console.error(`There was an error retrieving the book list: ${error}`));

        // if(details.email === adminUser.email && details.password === adminUser.password){
        //     console.log("Logged in");
        //     setUser({
        //         email: details.email
        //     });
        //     console.log(user);
        //     CurrUser(user);
        // }else{
        //     console.log("Details do not match");
        // }
    }

    return(
        <>
            <div className="sign-in-container">
                <SignInForm Login={Login} error={error} loginSuccessful={loginSuccessful}/>
            </div>
        </>
    );
}

export default SignIn;
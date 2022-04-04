import React, {useState} from 'react';
import axios from 'axios'

import SignInForm from './SignInForm';

function SignIn({CurrUser}) {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = details =>{
        console.log(details);

        axios
        .get('http://localhost:4001/users/all')
        .then(response => {
            console.log(response.data)
            response.data.map((user) => {
                if(user.email == details.email) {
                    if(details.password === user.password) {
                        // login successful
                        setUser({
                            email: details.email
                        });
                        CurrUser(user);
                    }
                    else {
                        // wrong password
                    }
                }
                else {
                    // email does not exist
                }
            })
        })
        .catch(error => console.error(`There was an error retrieving the book list: ${error}`))

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

    const Logout = () => {
        console.log("Logout");
        setUser({
                email: ""
        });
    }

    return(
        <>
            <div className="sign-in-container">
                <SignInForm Login={Login} error={error} />
            </div>
        </>
    );
}

export default SignIn;
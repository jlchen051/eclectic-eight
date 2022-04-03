import React, {useState} from 'react';

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

        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in");
            setUser({
                email: details.email
            });
            console.log(user);
            CurrUser(user);
        }else{
            console.log("Details do not match");
        }
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
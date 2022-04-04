import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './default/Home';
import Homepage from './Homepage';
import Profile from './profile/Profile';
import Testimony from './Testimony';
import Game from './Game';
import Schedule from './scheduler/Schedule';
import SignIn from './login/Sign-in';
import Register from './registration/Register';
import RegisterationSuccess from './registration/RegistrationSuccess';

let userToken = null;

function RouteURL(){
    const CurrUser = id =>{
        userToken = id;
    };

    console.log(userToken);

    return(
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/logged-in" element={<Homepage />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/testimony" element={<Testimony />} />
            <Route path="/game" element={<Game />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sign-in" element={<SignIn userId={CurrUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-success" element={<RegisterationSuccess />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default RouteURL;
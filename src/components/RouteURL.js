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

function RouteURL(){   
    return(
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/home" element={<Homepage />} /> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/testimony" element={<Testimony />} />
            <Route path="/game" element={<Game />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-success" element={<RegisterationSuccess />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default RouteURL;
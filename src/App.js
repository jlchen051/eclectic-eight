import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Navigation from './components/nav-bar/Navigation';
import RouteURL from './components/RouteURL';
import Socials from './components/footer/SocialsFooter';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>  
      <div className="app-container d-flex flex-column justify-content-between flex-nowrap">
        <Router>
            <Navigation />
            <RouteURL />
            <Socials />
        </Router>
      </div>
    </>
  );
}

export default App;

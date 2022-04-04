import React from 'react';
import './Navigation.css';
import {Nav, Navbar, Button} from 'react-bootstrap';
import Logo from './images/tech-alpharetta-logo-cutout-1024x565.png';

const admin = 2;
const regUser = 1;
const guest = 0;

function Navigation(){
    var token = window.sessionStorage.getItem('user');

    if(token == regUser || token == admin){
        console.log("Logged In");
    }

    const Logout = () => {
        console.log("Logout");
        if(token == regUser || token == admin){
            window.sessionStorage.setItem('user', 0);
        }
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="top">
            <div className="left-adjustment"></div>
            <Navbar.Brand className="order-lg-0 me-auto" href="/">
                <img className="logo d-inline align-top" src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="order-lg-0 order-0" aria-controls="responsive-navbar-nav" />
            <div className="right-adjustment"></div>
            <Navbar.Collapse>
                <Nav className="order-lg-0 text-center me-auto">
                    <Nav.Link className="nav-item"  href={token == regUser || token == admin ? "/home" : "/"}>
                        Home
                    </Nav.Link>
                    { token == guest ?
                        <Nav.Link className="nav-item" href="/testimony">
                            Testimony
                        </Nav.Link>
                    : null }
                    { token == regUser || token == admin ?
                        <Nav.Link className="nav-item" href="/profile">
                            Profile
                        </Nav.Link>
                    : null }
                    { token == admin ?
                        <Nav.Link className="nav-item" href="/schedule">
                            Schedule
                        </Nav.Link>
                    : null }
                    <Nav.Link className="nav-item" href="/game">
                        Game
                    </Nav.Link>
                </Nav>

                { token == guest ? 
                    <Nav.Link className="justify-content-center text-center align-center" href="/sign-in">
                        <Button className="login-btn btn-warning text-muted fs-6">
                            Log In
                        </Button>
                    </Nav.Link>
                :
                    <Nav.Link className="justify-content-center text-center align-center" href="/sign-in">
                        <Button className="logout-btn btn-warning text-muted fs-6" onClick={Logout} >
                            Log Out
                        </Button>
                    </Nav.Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
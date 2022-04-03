import React from 'react';

import {Nav, Navbar, Container} from 'react-bootstrap';
import './SocialsFooter.css';


function SocialsFooter(){
    return(
        <>
            <div className="socials-footer-wrapper">
                <Navbar bg="dark" id="bottom">
                    <Container fluid className="justify-content-center text-center">
                        <Nav className="ml-auto">
                            <a className="btn" id="facebook" href="https://www.facebook.com/techalpharetta/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn" id="twitter" href="https://twitter.com/techalpharetta">
                                <i className="fab fa-twitter"></i>
                            </a>                  
                            <a className="btn" id="linkedin" href="https://www.linkedin.com/company/tech-alpharetta/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn" id="youtube"
                            href="https://www.youtube.com/channel/UCN7QL1Fo4PmWLgLvtedd84g">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </Nav>
                    </Container>
                </Navbar>
                <p className="copyright-contact text-center">
                    © 2022 Tech Alpharetta • 2972 Webb Bridge Road, Alpharetta, GA 30009 • Tel: 678-664-7958
                </p>
            </div>
        </>
    );
}

export default SocialsFooter;
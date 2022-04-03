import React from 'react';
import './HomeCarousel.css'
import {Carousel, Button} from 'react-bootstrap';
import Logo from './images/logo-techalpharetta-6000x4000.png';
import Mentor from './images/Mentor-Stock-Image.jpg';
import Satisfied from './images/Satisfied-Stock-Image.jpg'

function HomeCarousel() {
    return(
        <>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Logo}
                    alt="Tech Alpharetta"
                    />
                    <Carousel.Caption className='carousel-caption text-center'>
                        <div className='caption-text'>
                            <h1>Tech Alpharetta</h1>
                            <p className='d-none d-md-block'>Come join us and learn what Tech Alpharetta is all about!</p>
                        </div>
                        <Button variant="info" href="#mission">Our Mission</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Mentor}
                    alt="Get Involved"
                    />

                    <Carousel.Caption className='carousel-caption text-center'>
                        <div className='caption-text'>
                            <h1>Mentor-Mentee Pair Program</h1>
                            <p className='d-none d-md-block'>Become inspired to pursue your future career in STEAM by pairing with a Mentor! Interested? </p>
                        </div>
                        <Button variant="info" href="/register">Become Involved</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Satisfied}
                    alt="Testimony"
                    />

                    <Carousel.Caption className='carousel-caption text-center'>
                        <div className='caption-text'>
                            <h1>Mentee Testimonial</h1>
                            <p className='d-none d-md-block'>Looking to join, but don't know what to expect? Our previous graduates have you covered!</p>
                        </div>
                        <Button variant="info" href="/testimony">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeCarousel;
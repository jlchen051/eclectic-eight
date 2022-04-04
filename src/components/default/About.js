import React from 'react';

import './About.css';

function About() {
    return(
        <>
            <div className="home-page-container d-flex flex-column justify-content-center text-center mx-auto">
                <div className="text-wrapper">
                    <div className='story-wrapper'>
                        <h2 className='story-heading'>Our Story</h2>
                        <p className='story-text'>
                            <strong>Tech Alpharetta</strong> (previously the <em>Alpharetta Technology Commission</em>), the first organization of its kind in Georgia, was established in 2012 by the City of Alpharetta and is an independent, 501(c)(6) nonprofit organization today. At the time of the organization’s founding, Alpharetta’s predominant industry was technology, and technology continues to be Alpharetta’s primary industry today. There are nearly 700 technology companies that currently call Alpharetta home, making Alpharetta the <em>Technology City of the South</em>.
                        </p>
                    </div>
                    <div className='mission-wrapper'>
                        <h2 className='mission-heading' id="mission">Our Mission</h2>
                        <p className='mission-text'>
                            Initially, Tech Alpharetta’s mission was to help grow technology and innovation in Alpharetta through:
                        </p>
                        <div className='mission-list-wrapper'>
                            <ul className='container mx-auto mission-list'>
                                <li className='mission-list-item'>Startup Incubator</li>
                                <li className='mission-list-item'>Tech Events</li>
                                <li className='mission-list-item'>Strategic Advisory</li>
                            </ul>
                        </div>
                        <p className='mission-text-continued'>
                            And from there we went on to launch the <strong>Women's Forum</strong>, where our goal was to advance opportunities for female executives and entrepreneurs working in STEM careers, by offering networking, educational and mentoring events in our local community. There are over 900 technology companies in the Greater Alpharetta corridor, and our Women’s Forum was created to bring together the area’s many talented women in STEM careers, convenient to where they work or live.
                        </p>
                        <p className='mission-text-continued'>
                            But we didn't stop there! Because that's when we had the <em>wonderful</em> idea that we should broaden our horizons and start empowering our community at its core by inspiring Alpharetta's young women. That's precisely why we launched this program! A way for us to impact the promising future of young women and girls steering towards STEAM careers.   
                        </p>
                    </div>
                    <div className='program-wrapper'>
                        <h2 className='program-heading'>The Program</h2>
                        <p className='program-text'>
                            In 2021, we launched a new <strong> Science, Technology, Engineering, Arts and Mathematics (STEAM) </strong> Mentoring Program to inspire the next generation of female technologists. The pilot, launched in partnership with Alpharetta’s <em>Innovation Academy</em>, pairs 9th and 10th grade students with female technology executives as mentors to connect and learn about the journeys of women in STEAM.  
                        </p>
                        <p className='program-text-continued'>
                            As one teacher from the Innovation Academy said: <em>“For [the students] to have these role models of what they could be and hear their story of how they got where they are is really, really powerful. It’s not something we can get from a textbook.”</em> We at Tech Alpharetta hope to expand the program to additional Innovation Academy students in the fall of 2022, eventually scaling to more schools and even colleges and/or universities in years to come, potentially building an internship pipeline program down the line.
                        </p>
                    </div>
                    <div className='to-top-wrapper justify-content-center align-items-center'>
                        <a className='to-top' href="#top">Back to Top</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
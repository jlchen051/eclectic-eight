import React, { useState, useEffect } from 'react';
import ga from './images/ga.jpg'
import './Homepage.scss';
import {Button} from 'react-bootstrap';

const Homepage = (isMentor) => {
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        // Update the appointment time if already stored in database for user
    });
    
    const getAppointmentTime = () => {
        if(appointment) {
            return (
                <div>
                    
                <div className="mentor">Upcoming Appointment: 4/30 at 5:00pm</div>
                <button className="btn">Reschedule Meeting</button>
                </div>
            )
        }
        // Does not have appointment
        if(isMentor) {
            return (
                <Button className="btn">
                    Select Availability
                </Button>
            )
        }

        return (
            <button className="btn">Schedule Meeting</button>
        )
    }

    return (
        <div className="img-overlay d-flex justify-content-center align-self-top">
            <img src={ga} alt="background"/>
            <div className="overlay">
                <div className="mentor">Welcome, {window.sessionStorage.getItem('username')}!</div>
                <div className="mentor">
                    You've been Paired with: Vicky Yu
                </div>
                {!isMentor ? 
                    <div className="mentor">
                        Request New Mentor
                    </div> 
                : null}
                <div>
                    {getAppointmentTime()}
                </div>
            </div>
        </div>
    )
};

export default Homepage;
import React, { useState, useEffect } from 'react';
import ga from './default/images/ga.jpg'
import './Homepage.scss';

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
                <button className="btn">Select Availability</button>
            )
        }
        return (
            <button className="btn">Schedule Meeting</button>
        )
    }

    return (
        <div className="img-overlay">
            <img src={ga} />
            <div className="overlay">
            <div className="mentor">Welcome, Vicky!</div>
            <div className="mentor">You've been Paired with: Vicky Yu</div>
            {!isMentor ? <div className="mentor">Request New Mentor</div> : null}
            <div>
            
            {getAppointmentTime()}
            </div>
            </div>
        </div>
    )
};

export default Homepage;
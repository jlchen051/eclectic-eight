import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-multi-date-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import {Button} from 'react-bootstrap';

import './Schedule.css';

function Schedule() {
    const today = new Date();

    const [dates, setDates] = useState([]);

    const [showCalendar, setShowCalendar] = useState(true);
    const [checkDates, setCheckDates] = useState(dates.length);

    const [showTimes, setShowTimes] = useState(false);
    const [timeOne, setTimeOne] = useState(['5:00', '9:00']);
    const [timeTwo, setTimeTwo] = useState(['5:00', '9:00']);
    const [timeThree, setTimeThree] = useState(['5:00', '9:00']);

    const [showBack, setShowBack] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [showFinish, setShowFinish] = useState(false);
    const [showComplete, setShowComplete] = useState(false); 

    useEffect(() => {
        
        console.log(checkDates);
    }, [checkDates]);

    const clicked = (e) => {
        setDates(e);
        setCheckDates(dates.length);

        if(checkDates > -1){
            setShowNext(true);
        }
    };

    const reset = () => {
        setDates([]);
        setCheckDates(dates.length);
        setShowNext(false);
    };

    const next = () => {
        setShowCalendar(false);
        setShowTimes(true);
        setShowBack(true);
        setShowNext(false);
        setShowFinish(true);
    };

    const back = () => {
        setShowCalendar(true);
        setShowTimes(false);
        setShowBack(false);
        setShowNext(true);
        setShowFinish(false);
    };

    const complete = () => {
        setShowTimes(false);
        setShowBack(false);
        setShowFinish(false);
        setShowComplete(true);
    };

    return(
        <>
            <div className="calendar-wrapper d-flex flex-column justify-content-center align-items-center flex-wrap mx-auto">
                <div className="heading-element d-flex flex-column align-items-center">
                    <h1 className="calendar-heading text-info">Calendar</h1>
                    {showCalendar ? 
                        <p className="calendar-description">Select up to 3 dates for scheduling.</p>
                    : null}

                    {showTimes ? 
                        <p className="time-selector-description">Set times for your meeting availability.</p>
                    : null}

                    {showComplete ? 
                        <div className="completion-message-wrapper d-flex flex-wrap justify-content-center align-items-center">
                            <h3 className="completion-description">
                                Scheduling Successful!
                            </h3>
                            <p className="completion-description-continued">
                                Your mentee will be notified of your chosen meeting availabilities by email.
                            </p>
                            <Button className="homepage-button" href="/home-page">
                                Back to Home
                            </Button>
                        </div>
                    : null}
                </div>

                {showCalendar ?
                    <div className="calendar-element">
                        <Calendar className="bg-light"
                            multiple
                            minDate={today}
                            value={dates}
                            onChange={clicked}

                            mapDays={({ date }) => {
                                let props = {};
                                let isWeekend = [0, 6].includes(date.weekDay.index);
                                    
                                if (isWeekend) 
                                    props.className = "highlight highlight-red";
                                    
                                    return props;
                            }}

                            sort

                            disabled={dates.length >= 3}
                        >
                            <Button className="reset-button"
                                onClick={() => reset()}
                            >
                                    Reset
                            </Button>
                        </Calendar> 
                    </div> 
                : null}

                {showTimes ?
                    <div className="time-select-element d-flex flex-column align-items-center">
                        {checkDates > -1 ?
                            <h2 className="time-one-heading">
                                {dates[0].monthIndex}/{dates[0].day}/{dates[0].year}
                            </h2>
                        : null}
                        {checkDates > -1 ? 
                            <TimeRangePicker onChange={setTimeOne} value={timeOne} disableClock={true} />
                        : null}
                        {checkDates > 0 ?
                            <h2 className="time-two-heading">
                                {dates[1].monthIndex}/{dates[1].day}/{dates[1].year}
                            </h2>
                        : null}
                        {checkDates > 0 ? 
                            <TimeRangePicker onChange={setTimeTwo} value={timeTwo} disableClock={true} />
                        : null}
                        {checkDates > 1 ?
                            <h2 className="time-one-heading">
                                {dates[2].monthIndex}/{dates[2].day}/{dates[2].year}
                            </h2>
                        : null}
                        {checkDates > 1 ? 
                            <TimeRangePicker onChange={setTimeThree} value={timeThree} disableClock={true} />
                        : null}
                    </div> 
                : null }

                {showComplete ?
                    <div className="finish-element">
                        
                    </div>  
                : null } 

                <div className="button-element d-flex justify-content-center align-items-center">
                    {showBack ? 
                        <Button className="back-button"
                            onClick={() => back()}
                        >
                            Back
                        </Button> 
                    : null}
                    
                    {showNext ?
                        <Button className="next-button"
                            onClick={() => next()}
                        >
                            Next
                        </Button> 
                    : null}

                    {showFinish ?
                        <Button className="finish-button"
                            onClick={() => complete()}
                        >
                            Finish
                        </Button> 
                    : null}
                </div> 
            </div>
        </>
    );
}

export default Schedule;
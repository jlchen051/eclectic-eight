import React, {useState} from 'react';
import {Calendar} from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

function Schedule() {
    const today = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    const [dates, setDates] = useState([today, tomorrow]);

    console.log(dates);

    return(
        <>
            <div className='calendar-wrapper d-flex flex-column justify-content-center align-items-center flex-wrap'>
                <h1 className='calendar-heading'>Calendar</h1>
                <p className='calendar-description'>Select up to 3 dates for scheduling.</p>
                <Calendar 
                    multiple
                    value={dates}
                    onChange={setDates}

                    format="MM/DD/YYYY HH:mm:ss"
                    plugins={[
                        <TimePicker position="bottom" />
                    ]}

                    sort
                />
            </div>
        </>
    );
}

export default Schedule;
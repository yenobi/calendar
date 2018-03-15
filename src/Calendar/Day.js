import React from 'react';
import styled from 'styled-components';

export default function Day({day, events, today, onClick}) {
    const DayWrapper = styled.div`
        border: 2px solid black;
        border-radius: 2px;
        margin: 5px;
    `;

    return (
        <DayWrapper
            onClick={() => onClick(day)}>
            <p>{day.date}</p>
            <p>{day.day}</p>
            <p>
            Events: 
            {events ? 'none' : 'yes'}       
            </p>
            {today ?
            <p style={{color: 'red'}}>today</p>
            : null}
        </DayWrapper>
    )
}

// Day.propTypes = {
//   day: PropTypes.object.required,
//   events: PropTypes.array.required,
//   today: PropTypes.bool.required,
//   onClick: PropTypes.func.required
// }

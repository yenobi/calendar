import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {convertDayNumberToDay } from '../Shared/helpers';

const DayWrapper = styled.div`
    border: 2px solid black;
    border-radius: 2px;
    margin: 5px;
`;

export default function Day(props, {store}) {
    const {day} = props;
    const eventsToday = store.getState().events.filter(event => event.day === day);
    const {today} = store.getState();
    
    return (
        <DayWrapper
            onClick={() => (
                store.dispatch({
                      type: 'TOGGLE_FORM',
                      day
                  })
            )}
        >
            <p>
            {day}
            </p>
            <p>
            Events: 
            {eventsToday.length === 0 ? 'none' : 'yes'}       
            </p>
            {day === convertDayNumberToDay(today) ?
            <p style={{color: 'red'}}>today</p>
            : null}
        </DayWrapper>
    )
}

Day.contextTypes = {
  store: PropTypes.object
}

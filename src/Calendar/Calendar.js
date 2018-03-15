import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddEvent from './AddEvent';
import Day from './Day';

const Wrapper = styled.div`
    display: flex;
`;

const arrMock = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default class Calendar extends React.Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  showForm = () => {
    const {store} = this.context;
    return store.getState().formVisible ?
          <AddEvent />
          : null;
  };

  render() {
    return (
    <main>
        <ul>
            <li>list of days</li>
            <li>active day</li>
            <li>list of events on this day</li>
        </ul>
        <Wrapper>
          {arrMock.map(day => <Day
              key={day}
              day={day}
              >day</Day>)}
        </Wrapper>
        {this.showForm()}
    </main>
  )
  }
}

Calendar.contextTypes = {
  store: PropTypes.object
}

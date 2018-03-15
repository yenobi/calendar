import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddEvent from './AddEvent';
import DayContainer from './DayContainer';

const Wrapper = styled.div`
    display: flex;
`;

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

  // todo: refactor this function to state dependent expression
  showForm = () => {
    const {form} = this.context.store.getState();
    return form.visible ?
          <AddEvent day={form.day} />
          : null;
  };

  render() {
    const {store} = this.context;
    return (
    <main>
        <ul>
            <li>list of days</li>
            <li>active day</li>
            <li>list of events on this day</li>
        </ul>
        <Wrapper>
          {store.getState().week.map(day => <DayContainer day={day} key={day.date} />)}
        </Wrapper>
        {this.showForm()}
    </main>
  )
  }
}

Calendar.contextTypes = {
  store: PropTypes.object
}

// todo: refactor component to be presentaional + container

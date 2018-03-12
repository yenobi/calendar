import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddEvent from './AddEvent';

const Day = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid black;
    border-radius: 2px;
    margin: 5px;
`;

const Wrapper = styled.div`
    display: flex;
`;

const arrMock = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
          'here should be form'
          : null;
  };

  render() {
    const {props} = this.props;
    const {store} = this.context;
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
              onClick={() => (
                  store.dispatch({
                      type: 'TOGGLE_FORM',
                      day
                  })
              )}
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

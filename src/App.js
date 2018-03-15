import React from 'react';
import Header from './Shared/Header';
import Aside from './Shared/Aside';
import PropTypes from 'prop-types';
import Calendar from './Calendar/Calendar';

class App extends React.Component {
componentDidMount() {
  const {store} = this.context;
  store.subscribe(() => {
    console.log(store.getState());
  });
  store.dispatch({
            type: 'UPDATE_TODAY',
            today: new Date().getDay()
        });
}
  render() {
    return (
      <div>
        <Header />
        <Aside />
        <Calendar />
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;

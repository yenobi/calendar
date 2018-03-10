import React from 'react';
import Header from './Shared/Header';
import Aside from './Shared/Aside';
import PropTypes from 'prop-types';

class App extends React.Component {
componentDidMount() {
  const {store} = this.context;
  store.subscribe(() => {
    console.log(store.getState());
  })
}
  render() {
    const {store} = this.context;
    return (
      <div>
        <Header />
        <Aside />
        <main>
          <div style={{width: '150px', height: '150px', border: '1px solid firebrick'}}>
          here will be calendar ?
          <button
            onClick={() => {
              store.dispatch({
                type: 'TOGGLE_FORM'
              });
            }}
          >show form</button>
          </div>
        </main>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;

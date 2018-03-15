import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducer';
import PropTypes from 'prop-types';

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: PropTypes.object
};

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// recap store scheme
// let state = {
//     week: [{
//         day: 'Mon',
//         date: '01.01'
//     }, {}],
//     events: [{
//         date: '02.01',
//         text: 'some text'
//     }, {}],
//     currentDay: {
//         day: 'Fri',
//         date: '05.01'
//     },
//     formVisible: false
// };

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import Calendar from './Calendar';
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
    <Provider store={createStore(Calendar)}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// scheme of store
// {
    // showForm: false
    // events: []
    // goals: []
// }
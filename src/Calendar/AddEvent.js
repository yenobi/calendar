import React from 'react';
import PropTypes from 'prop-types';

export default class AddEvent extends React.Component {
    state = {
        text: ''
    };
    
    handleTextChange = (event) => {
        this.setState({text: event.target.value})
    };
    
    createEvent = () => {
        const {store} = this.context;
        return {
            day: store.getState().currentEventDay,
            text: this.state.text
        };
    };
    
    saveEvent = (ev) => {
        ev.preventDefault();
        const {store} = this.context;
        const event = this.createEvent();
        store.dispatch({
            type: 'ADD_EVENT',
            event
        });
        console.log(store.getState());
    };

    render() {
        const {store} = this.context;
        return (
            <form onSubmit={this.saveEvent}>
                <div>
                    <p>Day:</p>
                    <input placeholder="day" value={store.getState().currentEventDay} readOnly/>
                    <p>Text:</p>
                    <textarea placeholder="text" value={this.state.text} onChange={this.handleTextChange}/>
                    <button type="submit">save event</button>
                </div>
            </form>
        )
    }
}

AddEvent.contextTypes = {
  store: PropTypes.object
}

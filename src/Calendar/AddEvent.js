import React from 'react';
import PropTypes from 'prop-types';

export default function AddEvent(props, {store}) {
    return (
        <div>
            <form>
                Day:
                <input placeholder="day" value={store.getState().currentEventDay}/>
                Text:
                <textarea placeholder="text" />
            </form>
        </div>
    )
}

AddEvent.contextTypes = {
  store: PropTypes.object
}

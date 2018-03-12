import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props, {store}) {
  return (
    <header>
      <button type="button">Add event</button>
      <button type="button">Refresh</button>
      <input placeholder="search" />
      <p>{store.getState().formVisible}</p>
    </header>
  )
}
Header.contextTypes = {
  store: PropTypes.object
}
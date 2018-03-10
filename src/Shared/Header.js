import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props, {store}) {
  return (
    <header>
      <p>header</p>
      <p>{store.getState().formVisible}</p>
    </header>
  )
}
Header.contextTypes = {
  store: PropTypes.object
}
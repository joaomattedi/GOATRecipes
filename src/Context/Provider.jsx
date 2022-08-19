import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const context = {};
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;

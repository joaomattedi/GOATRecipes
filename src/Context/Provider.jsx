import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [searchResult, setSearchResult] = useState([]);

  const context = {
    searchResult,
    setSearchResult,
  };

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

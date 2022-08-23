import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

const copy = require('clipboard-copy');

export default function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [showCopied, setShowCopied] = useState(false);

  const shareButtonClick = async (match) => {
    copy(`http://localhost:3000${match.url}`);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), +'3000');
  };

  const context = {
    recipes,
    setRecipes,
    showCopied,
    shareButtonClick,
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

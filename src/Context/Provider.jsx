import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

const copy = require('clipboard-copy');

export default function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [showCopied, setShowCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const shareButtonClick = async (match) => {
    copy(`http://localhost:3000${match.url}`);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), +'3000');
  };

  const favoriteButtonClick = (objShape, id) => {
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([objShape]));
    } else if (isFavorite || objShape === 'remove') {
      console.log('oi');
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('favoriteRecipes')).filter((item) => {
            console.log(item.id !== id);
            return item.id !== id;
          }),
        ]),
      );
    } else {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('favoriteRecipes')),
          objShape,
        ]),
      );
    }
    setIsFavorite((prevState) => !prevState);
  };

  const context = {
    recipes,
    setRecipes,
    showCopied,
    shareButtonClick,
    isFavorite,
    setIsFavorite,
    favoriteButtonClick,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}.isRequired;

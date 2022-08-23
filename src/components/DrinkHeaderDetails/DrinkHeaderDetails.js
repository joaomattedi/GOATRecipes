import React from 'react';
import PropTypes from 'prop-types';

function DrinkHeaderDetails({ details }) {
  return (
    <div>
      <img
        src={ details.strDrinkThumb }
        alt={ details.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{details.strDrink}</h1>
      <h2 data-testid="recipe-category">
        {details.strCategory}
        {' '}
        {details.strAlcoholic}
      </h2>
    </div>
  );
}

DrinkHeaderDetails.propTypes = {
  details: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strCategory: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
};

export default DrinkHeaderDetails;

import React from 'react';
import PropTypes from 'prop-types';

function FoodHeaderDetails({ details }) {
  return (
    <div>
      <img
        src={ details.strMealThumb }
        alt={ details.strMeal }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{details.strMeal}</h1>
      <h2 data-testid="recipe-category">{details.strCategory}</h2>
    </div>
  );
}

FoodHeaderDetails.propTypes = {
  details: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strCategory: PropTypes.string,
  }).isRequired,
};

export default FoodHeaderDetails;

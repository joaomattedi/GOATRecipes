import PropTypes from 'prop-types';
import React from 'react';

export default function RecipeCard({ recipe, index, drink }) {
  if (drink) {
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          width="150"
        />
        <h3 data-testid={ `${index}-card-name` }>{recipe.strDrink}</h3>
      </div>
    );
  }
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        width="150"
      />
      <h3 data-testid={ `${index}-card-name` }>{recipe.strMeal}</h3>
    </div>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.number,
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
  drink: PropTypes.bool,
}.isRequired;

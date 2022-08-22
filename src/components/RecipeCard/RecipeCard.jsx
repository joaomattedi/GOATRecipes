import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RecipeCard({ recipe, index, drink }) {
  const history = useHistory();

  if (drink) {
    return (
      <div>
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          width="150"
        />
        <h3 data-testid={ `${index}-card-name` }>{recipe.strDrink}</h3>
        <button
          onClick={ () => history.push(`/drinks/${recipe.idDrink}`) }
          data-testid={ `${index}-recipe-card` }
          type="button"
        >
          Details
        </button>
      </div>
    );
  }
  return (
    <div>
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        width="150"
      />
      <h3 data-testid={ `${index}-card-name` }>{recipe.strMeal}</h3>
      <button
        onClick={ () => history.push(`/foods/${recipe.idMeal}`) }
        data-testid={ `${index}-recipe-card` }
        type="button"
      >
        Details
      </button>
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

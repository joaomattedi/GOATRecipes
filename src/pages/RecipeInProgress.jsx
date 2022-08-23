import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../services/fetchAPI';

export default function RecipeInProgress({ drink = false }) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const regExIngredients = new RegExp('strIngredient', 'gi');
  const ingredients = Object.keys(recipe)
    .filter((element) => element.match(regExIngredients) && recipe[element]);

  useEffect(() => {
    if (drink) {
      return (
        fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((data) => setRecipe(data.drinks[0]))
      );
    }
    fetchAPI(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((data) => setRecipe(data.meals[0]));
    // eslint-disable-next-line
  }, []);
  if (drink) {
    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ recipe.strDrinkThumb }
          alt={ recipe.strDrink }
          width="400"
        />
        <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
        <button type="button" data-testid="share-btn">Share</button>
        <button type="button" data-testid="favorite-btn">{'<3'}</button>
        <h2 data-testid="recipe-category">{recipe.strCategory}</h2>

        {ingredients.map((element, index) => (
          <label
            key={ element }
            htmlFor={ element }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              id={ element }
              key={ element }
            />
            {recipe[element]}
          </label>
        ))}
        <p data-testid="instructions">{recipe.strInstructions}</p>
        <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
      </div>
    );
  }
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipe.strMealThumb }
        alt={ recipe.strMeal }
        width="400"
      />
      <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">{'<3'}</button>
      <h2 data-testid="recipe-category">{recipe.srtCategory}</h2>

      {ingredients.map((element, index) => (
        <label
          key={ element }
          htmlFor={ element }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            type="checkbox"
            id={ element }
            key={ element }
          />
          {recipe[element]}
        </label>
      ))}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

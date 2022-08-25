import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchAPI from '../services/fetchAPI';
import getLocalStorageIngredients from '../services/helpers/getLocalStorageIngredients';
import saveInProgressIngredients from '../services/helpers/saveInProgressIngredients';

export default function RecipeInProgress({ drink = false }) {
  const [recipe, setRecipe] = useState({});
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const { id } = useParams();
  const regExIngredients = new RegExp('strIngredient', 'gi');
  const ingredients = Object.keys(recipe)
    .filter((element) => element.match(regExIngredients) && recipe[element]);

  useEffect(() => {
    if (drink) {
      getLocalStorageIngredients(setCheckedIngredients, id, true);
      return (
        fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((data) => setRecipe(data.drinks[0]))
      );
    }
    getLocalStorageIngredients(setCheckedIngredients, id);
    fetchAPI(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((data) => setRecipe(data.meals[0]));
    // eslint-disable-next-line
  }, []);

  const toggleChecked = async (e) => {
    if (checkedIngredients.includes(e.target.id)) {
      const newChecked = checkedIngredients.filter((element) => element !== e.target.id);
      saveInProgressIngredients(newChecked, id, drink);
      setCheckedIngredients(newChecked);
    } else {
      saveInProgressIngredients([...checkedIngredients, e.target.id], id, drink);
      setCheckedIngredients([...checkedIngredients, e.target.id]);
    }
  };

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
              onChange={ (e) => toggleChecked(e) }
              checked={ checkedIngredients.includes(element) }
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
            onChange={ (e) => toggleChecked(e) }
            checked={ checkedIngredients.includes(element) }
          />
          {recipe[element]}
        </label>
      ))}
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ ingredients.length !== checkedIngredients }
      >
        Finalizar
      </button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

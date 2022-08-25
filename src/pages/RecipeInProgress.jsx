import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import fetchAPI from '../services/fetchAPI';
import getLocalStorageIngredients from '../services/helpers/getLocalStorageIngredients';
import saveInProgressIngredients from '../services/helpers/saveInProgressIngredients';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Context from '../Context/Context';

export default function RecipeInProgress({ drink = false }) {
  const [recipe, setRecipe] = useState({});
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [copied, setCopied] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const { favoriteButtonClick, isFavorite, setIsFavorite } = useContext(Context);
  const regExIngredients = new RegExp('strIngredient', 'gi');
  const ingredients = Object.keys(recipe)
    .filter((element) => element.match(regExIngredients) && recipe[element]);
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    if (drink) {
      if (favorites) {
        setIsFavorite(localStorage.getItem('favoriteRecipes').includes(id));
      }
      getLocalStorageIngredients(setCheckedIngredients, id, true);
      return (
        fetchAPI(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((data) => setRecipe(data.drinks[0]))
      );
    }
    if (favorites) {
      setIsFavorite(localStorage.getItem('favoriteRecipes').includes(id));
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

  const objShape = {
    alcoholicOrNot: drink ? recipe.strAlcoholic : '',
    category: recipe.strCategory,
    id: drink ? recipe.idDrink : recipe.idMeal,
    image:
      drink ? recipe.strDrinkThumb : recipe.strMealThumb,
    name: drink ? recipe.strDrink : recipe.strMeal,
    nationality: drink ? '' : recipe.strArea,
    type: drink ? 'drink' : 'food',
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
        <button
          type="button"
          data-testid="share-btn"
          onClick={ () => {
            setCopied(true);
            clipboardCopy(`http://localhost:3000/drinks/${id}`);
          } }
        >
          Share
        </button>
        <button
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          data-testid="favorite-btn"
          type="button"
          onClick={ () => favoriteButtonClick(objShape, id) }
        >
          <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="heart" />
        </button>
        {copied && (<p>Link copied!</p>)}
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
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ ingredients.length !== checkedIngredients.length }
          onClick={ () => history.push('/done-recipes') }
        >
          Finalizar
        </button>
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
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          setCopied(true);
          clipboardCopy(`http://localhost:3000/foods/${id}`);
        } }
      >
        Share
      </button>
      {copied && (<p>Link copied!</p>)}
      <button
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        type="button"
        onClick={ () => favoriteButtonClick(objShape, id) }
      >
        <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="heart" />
      </button>
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
        disabled={ ingredients.length !== checkedIngredients.length }
        onClick={ () => history.push('/done-recipes') }
      >
        Finalizar
      </button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

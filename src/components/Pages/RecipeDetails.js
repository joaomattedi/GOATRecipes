import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodHeaderDetails from './PageComponents/FoodHeaderDetails';
import DrinkHeaderDetails from './PageComponents/DrinkHeaderDetails';
import requestDetails from '../../services/requestDetais';
import videoId from '../../services/youtubeVideoID';
import requestRecomendation from '../../services/requestRecomendation';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import './recipesDetails.css';

const copy = require('clipboard-copy');

function RecipeDetails({ match }) {
  const [typePage, setTypePage] = useState('');
  const [details, setDeatils] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [recomendation, setRecomendation] = useState([1]);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    requestDetails(setDeatils, setTypePage, setIngredientList, match);
    const doneRecipesArray = localStorage.getItem('doneRecipes');
    const inProgresArray = localStorage.getItem('inProgressRecipes');
    const favoriteArray = localStorage.getItem('favoriteRecipes');
    if (doneRecipesArray !== null) {
      setDoneRecipe(doneRecipesArray.includes(match.params.id));
    }
    if (inProgresArray !== null) {
      setInProgress(inProgresArray.includes(match.params.id));
    }
    if (favoriteArray !== null) {
      setIsFavorite(favoriteArray.includes(match.params.id));
    }

    if (match.url.includes('food')) {
      const endPointDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      requestRecomendation(setRecomendation, endPointDrink, 'drinks');
    }
    if (match.url.includes('drink')) {
      const endPointMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      requestRecomendation(setRecomendation, endPointMeal, 'meals');
    }
  }, [match]);

  const history = useHistory();

  const shareButtonClick = async () => {
    copy(`http://localhost:3000${match.url}`);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), +'3000');
  };

  const favoriteButtonClick = () => {
    const objShape = {
      alcoholicOrNot: typePage === 'drink' ? details.strAlcoholic : '',
      category: details.strCategory,
      id: typePage === 'drink' ? details.idDrink : details.idMeal,
      image:
        typePage === 'drink' ? details.strDrinkThumb : details.strMealThumb,
      name: typePage === 'drink' ? details.strDrink : details.strMeal,
      nationality: typePage === 'drink' ? '' : details.strArea,
      type: typePage,
    };
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([objShape]));
    } else if (isFavorite) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([
        ...JSON.parse(localStorage.getItem('favoriteRecipes'))
          .map((item) => item.id !== match.params.id),
      ]));
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

  return (
    <main>
      {typePage === 'food' && <FoodHeaderDetails details={ details } />}
      {typePage === 'drink' && <DrinkHeaderDetails details={ details } />}
      <ul className="ingredinents">
        {ingredientList.map((ingredient, index) => {
          const condicao = ingredient !== 'null - null' && ingredient !== ' - ';
          return (
            condicao && (
              <li
                key={ ingredient }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {ingredient}
              </li>
            )
          );
        })}
      </ul>
      <p data-testid="instructions">{details.strInstructions}</p>
      {typePage === 'food' && (
        <iframe
          data-testid="video"
          title={ details.strMeal }
          width="420"
          height="315"
          src={ `https://www.youtube.com/embed/${videoId(details.strYoutube)}` }
        />
      )}
      <ul className="recomendationList">
        {recomendation.map(
          (item, index) => index < +'6' && (
            <li
              className="recomendationItemList"
              key={ `${index}-recomendation-card` }
              data-testid={ `${index}-recomendation-card` }
            >
              {typePage === 'food' && (
                <p data-testid={ `${index}-recomendation-title` }>
                  {item.strDrink}
                </p>
              )}
              {typePage === 'drink' && (
                <p data-testid={ `${index}-recomendation-title` }>
                  {item.strMeal}
                </p>
              )}
            </li>
          ),
        )}
      </ul>
      {showCopied && <p className="copied-message">Link copied!</p>}
      <button data-testid="share-btn" type="button" onClick={ shareButtonClick }>
        Share
      </button>
      <button
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        type="button"
        onClick={ favoriteButtonClick }
      >
        <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="heart" />
      </button>
      {!doneRecipe && (
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`${match.url}/in-progress`) }
        >
          {inProgress ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </main>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
    url: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;

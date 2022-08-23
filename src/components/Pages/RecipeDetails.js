import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodHeaderDetails from './PageComponents/FoodHeaderDetails';
import DrinkHeaderDetails from './PageComponents/DrinkHeaderDetails';
import requestDetails from '../../services/requestDetais';
import videoId from '../../services/youtubeVideoID';
import requestRecomendation from '../../services/requestRecomendation';
import './recipesDetails.css';

function RecipeDetails({ match }) {
  const [typePage, setTypePage] = useState('');
  const [details, setDeatils] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [recomendation, setRecomendation] = useState([1]);

  useEffect(() => {
    requestDetails(setDeatils, setTypePage, setIngredientList, match);

    if (match.url.includes('food')) {
      const endPointDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      requestRecomendation(setRecomendation, endPointDrink, 'drinks');
    }
    if (match.url.includes('drink')) {
      const endPointMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      requestRecomendation(setRecomendation, endPointMeal, 'meals');
    }
  }, [match]);
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
        {recomendation.map((item, index) => {
          console.log(item);
          return index < +'6' && (
            <li
              className="recomendationItemList"
              key={ `${index}-recomendation-card` }
              data-testid={ `${index}-recomendation-card` }
            >
              {typePage === 'food' && (
                <p data-testid={ `${index}-recomendation-title` }>{item.strDrink}</p>
              )}
              {typePage === 'drink' && (
                <p data-testid={ `${index}-recomendation-title` }>{item.strMeal}</p>
              )}
            </li>
          );
        })}
      </ul>
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

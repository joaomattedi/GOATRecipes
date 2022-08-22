import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchToken from '../../services/fetchTokens';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function Recipes({ drink = false }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (drink) {
      return fetchToken(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      ).then((data) => {
        setRecipes(data.drinks);
      });
    }
    fetchToken('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(
      (data) => {
        setRecipes(data.meals);
      },
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {recipes.map((element, index) => {
        if (index > +'11') return true;
        return (
          <RecipeCard
            key={ index }
            recipe={ element }
            index={ index }
            drink={ drink }
          />
        );
      })}
    </div>
  );
}

Recipes.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

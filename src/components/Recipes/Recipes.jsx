import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import Context from '../../Context/Context';
import fetchToken from '../../services/fetchTokens';
import FilterCategory from '../FilterCategory/FilterCategory';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function Recipes({ drink = false }) {
  const { filter, setFilter } = useContext(Context);

  useEffect(() => {
    if (drink) {
      return fetchToken(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
      ).then((data) => {
        setFilter(data.drinks);
      });
    }
    fetchToken('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(
      (data) => {
        setFilter(data.meals);
      },
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <FilterCategory drink={ drink } />
      {filter.map((element, index) => {
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

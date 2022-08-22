import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../../services/fetchAPI';

function RecipeDetails({ match }) {
  useEffect(() => {
    const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
    const endPointDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
    switch (true) {
    case match.url.includes('food'):
      fetchAPI(endPointFood);
      break;
    case match.url.includes('drink'):
      fetchAPI(endPointDrink);
      break;
    default:
      break;
    }
  }, []);
  return <div>Detalhes</div>;
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
    url: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;

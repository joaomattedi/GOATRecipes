import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/Pages/RecipeDetails';

export default function DrinkDetail({ match }) {
  return (
    <div>
      <RecipeDetails match={ match } />
    </div>
  );
}

DrinkDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

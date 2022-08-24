import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails/RecipeDetails';

export default function FoodDetail({ match }) {
  return (
    <div>
      <RecipeDetails match={ match } />
    </div>
  );
}

FoodDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
};

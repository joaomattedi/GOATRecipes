import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardRecipe from './CardRecipe';
import Context from '../Context/Context';

export default function DoneAndfavoriteRecipes({ type }) {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');
  const { isFavorite } = useContext(Context);

  useEffect(() => {
    if (type === 'done') {
      setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
    if (type === 'favorite') {
      setRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
      console.log(recipes);
    }
  }, [isFavorite]);

  const filterButtonClick = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <div>
      <div>
        <button
          value="all"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ filterButtonClick }
        >
          All
        </button>
        <button
          value="food"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ filterButtonClick }
        >
          Food
        </button>
        <button
          value="drink"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ filterButtonClick }
        >
          Drinks
        </button>
      </div>
      {recipes && recipes
        .filter((recipe) => (filter === 'all' ? true : filter === recipe.type))
        .map((recipe, index) => (
          <CardRecipe
            key={ `${recipe.name}-${index}` }
            src={ recipe.image }
            name={ recipe.name }
            date={ recipe.doneDate }
            index={ index }
            category={ recipe.category }
            tags={ recipe.tags }
            type={ recipe.type }
            nationality={ recipe.nationality }
            alcoholicOrNot={ recipe.alcoholicOrNot }
            id={ recipe.id }
            typePage={ type }
          />
        ))}
    </div>
  );
}

DoneAndfavoriteRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

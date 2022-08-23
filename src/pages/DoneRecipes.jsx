import React, { useEffect, useState } from 'react';

import CardRecipe from '../components/CardRecipe';
import Header from '../components/Header/Header';

export default function DoneRecipes() {
  const [doneRecipes, setDoneREcipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setDoneREcipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  const filterButtonClick = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <div>
      <Header pageTitle="Done Recipes" searchIconRender={ false } />
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
      {doneRecipes
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
          />
        ))}
    </div>
  );
}

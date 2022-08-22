import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchToken from '../../services/fetchTokens';

export default function FilterCategory({ drink }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (drink) {
      return fetchToken('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then((data) => setCategories(data.drinks));
    }
    fetchToken('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((data) => setCategories(data.meals));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {categories.map(({ strCategory }, index) => {
        if (index > +'4') return true;
        return (
          <button
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            type="button"
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

FilterCategory.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import Context from '../../Context/Context';
import fetchToken from '../../services/fetchTokens';

export default function FilterCategory({ drink }) {
  const [categories, setCategories] = useState([]);
  const { setFilter } = useContext(Context);

  useEffect(() => {
    if (drink) {
      return fetchToken('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then((data) => setCategories(data.drinks));
    }
    fetchToken('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((data) => setCategories(data.meals));
    // eslint-disable-next-line
  }, []);

  const handleClick = async (e) => {
    if (e.target.name) {
      if (drink) {
        const data = await fetchToken(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${e.target.name}`);
        return setFilter(data.drinks);
      }
      const data = await fetchToken(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.name}`);
      return setFilter(data.meals);
    }
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
  };

  return (
    <div>
      {categories.map(({ strCategory }, index) => {
        if (index > +'4') return true;
        return (
          <button
            data-testid={ `${strCategory}-category-filter` }
            key={ strCategory }
            name={ strCategory }
            type="button"
            onClick={ async (e) => handleClick(e) }
          >
            {strCategory}
          </button>
        );
      })}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ (e) => handleClick(e) }
      >
        All
      </button>
    </div>
  );
}

FilterCategory.propTypes = {
  drink: PropTypes.bool,
}.isRequired;

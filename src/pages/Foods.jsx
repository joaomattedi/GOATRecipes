import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Context from '../Context/Context';

export default function Foods() {
  const indexLimit = 12;
  const { searchResult } = useContext(Context);
  return (
    <div>
      <Header pageTitle="Foods" />
      { searchResult && searchResult
        .map(({ idMeal, strMeal, strMealThumb }, index) => index < indexLimit && (
          <div data-testid={ `${index}-recipe-card` } key={ idMeal }>
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
            />
            <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
          </div>
        )) }
    </div>
  );
}

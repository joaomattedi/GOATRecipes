import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Context from '../Context/Context';
import Recipes from '../components/Recipes/Recipes';

export default function Drinks() {
  const indexLimit = 12;
  const { searchResult } = useContext(Context);
  return (
    <div>
      <Header pageTitle="Drinks" />
      { searchResult.length > 0 ? searchResult
        .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
          index < indexLimit && (
            <div data-testid={ `${index}-recipe-card` } key={ idDrink }>
              <img
                data-testid={ `${index}-card-img` }
                src={ strDrinkThumb }
                alt={ strDrink }
              />
              <h3 data-testid={ `${index}-card-name` }>{ strDrink }</h3>
            </div>
          ))) : <Recipes drink /> }
      <Footer />
    </div>
  );
}

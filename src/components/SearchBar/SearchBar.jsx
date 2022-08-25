import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../Context/Context';
import fetchDrinkAPI from '../../services/fetchDrinkAPI';
import fetchFoodAPI from '../../services/fetchFoodAPI';

export default function SearchBar() {
  const history = useHistory();
  const { pathname } = history.location;
  const { searchResult, setSearchResult } = useContext(Context);
  const [searchInput, setSearch] = useState({ search: '', radio: '' });

  useEffect(() => {
    if (searchResult !== null) {
      if (pathname === '/foods' && searchResult.length === 1) {
        history.push(`/foods/${searchResult[0].idMeal}`);
      } else if (searchResult.length === 1 && pathname === '/drinks') {
        history.push(`/drinks/${searchResult[0].idDrink}`);
      }
    }
  }, [history, pathname, searchResult]);

  const handleSearchInputChange = ({ target }) => {
    const { name, value } = target;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSearchButtonClick = async () => {
    const { radio, search } = searchInput;
    if (radio === 'first-letter' && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const result = pathname.match('food') ? await fetchFoodAPI(radio, search)
        : await fetchDrinkAPI(radio, search);
      await setSearchResult(result);
      if (result === null || result.length === 0) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
    }
  };

  return (
    <div>
      <input
        value={ searchInput.search }
        type="text"
        name="search"
        data-testid="search-input"
        onChange={ handleSearchInputChange }
      />
      <label htmlFor="search-radio">
        <input
          value="ingredient"
          id="search-radio"
          name="radio"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ handleSearchInputChange }
        />
        Ingredient
        <input
          value="name"
          id="search-radio"
          name="radio"
          type="radio"
          data-testid="name-search-radio"
          onChange={ handleSearchInputChange }
        />
        Name
        <input
          value="first-letter"
          id="search-radio"
          name="radio"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ handleSearchInputChange }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ onSearchButtonClick }
      >
        Search
      </button>
    </div>
  );
}

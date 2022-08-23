import React, { useState, useContext } from 'react';
import Context from '../../Context/Context';
import fetchFoodAPI from '../../services/fetchFoodAPI';

export default function SearchBar() {
  const { setSearchResult } = useContext(Context);
  const [searchInput, setSearch] = useState({ search: '', radio: '' });

  const handleSearchInputChange = ({ target }) => {
    const { name, value } = target;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSearchButtonClick = async () => {
    const { radio, search } = searchInput;
    if (radio === 'first-letter' && search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const result = await fetchFoodAPI(radio, search);
      await setSearchResult(result);
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

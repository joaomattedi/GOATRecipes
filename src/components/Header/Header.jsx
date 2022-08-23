import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header({ pageTitle, searchIconRender = true }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInput, setSearch] = useState({ search: '', radio: '' });

  const handleSearchInputChange = ({ target }) => {
    const { name, value } = target;
    setSearch((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <header>
      <div>
        <NavLink to="/profile">
          <img
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
          />
        </NavLink>
        {searchIconRender && (
          <button type="button" onClick={ onSearchIconClick }>
            <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
          </button>
        )}
        { showSearchInput && (
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
              Ingrediente
              <input
                value="name"
                id="search-radio"
                name="radio"
                type="radio"
                data-testid="name-search-radio"
                onChange={ handleSearchInputChange }
              />
              Nome
              <input
                value="first-letter"
                id="search-radio"
                name="radio"
                type="radio"
                data-testid="first-letter-search-radio"
                onChange={ handleSearchInputChange }
              />
              Primeira letra
            </label>
            <button
              type="button"
              data-testid="exec-search-btn"
              onClick={ () => {} }
            >
              Buscar
            </button>
          </div>
        )}
        <p data-testid="page-title">{pageTitle}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
}.isRequired;

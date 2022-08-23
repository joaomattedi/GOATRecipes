import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header({ pageTitle, searchIconRender = true }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

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
            <input type="text" name="search" data-testid="search-input" />
            <label htmlFor="search-radio">
              Ingrediente
              <input
                value="ingrediente"
                id="search-radio"
                type="radio"
                data-testid="ingredient-search-radio"
              />
              Nome
              <input
                value="nome"
                id="search-radio"
                type="radio"
                data-testid="name-search-radio"
              />
              Primeira letra
              <input
                value="first-letter"
                id="search-radio"
                type="radio"
                data-testid="first-letter-search-radio"
              />
            </label>
            <button type="button" data-testid="exec-search-btn">Buscar</button>
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

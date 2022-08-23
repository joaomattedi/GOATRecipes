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
          <input type="text" name="search" data-testid="search-input" />
        )}
        <p data-testid="page-title">{pageTitle}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
}.isRequired;

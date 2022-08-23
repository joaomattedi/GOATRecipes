import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header({ pageTitle, searchIconRender = true }) {
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
          <img src={ searchIcon } alt="search" data-testid="search-top-btn" />
        )}
        <p data-testid="page-title">{pageTitle}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
}.isRequired;

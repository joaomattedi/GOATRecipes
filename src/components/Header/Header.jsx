import PropTypes from 'prop-types';
import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header({ pageTitle, searchIconRender = true }) {
  return (
    <header>
      <div>
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
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

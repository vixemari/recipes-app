import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import profileImg from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarHeader from './SearchBarHeader';

function Header({ title, btnSearch }) {
  const [redirectToProfile, setRedirectToProfile] = useState({ canRedirect: false });
  const [openFilters, setOpenFilters] = useState({ canOpenFilters: false });
  function handleClickProfile() {
    setRedirectToProfile({ canRedirect: true });
  }

  function handleClickSearch() {
    setOpenFilters(({ canOpenFilters }) => (
      { canOpenFilters: !canOpenFilters }));
  }

  return (
    <div>
      <button
        aria-label="btn-profile"
        src={ profileImg }
        type="button"
        data-testid="profile-top-btn"
        onClick={ handleClickProfile }
      >
        <img src={ profileImg } alt="profile-btn" />
      </button>

      <h1 data-testid="page-title">{title}</h1>
      {
        btnSearch && (
          <button
            aria-label="btn-search"
            src={ searchIcon }
            type="button"
            data-testid="search-top-btn"
            onClick={ handleClickSearch }
          >
            <img src={ searchIcon } alt="profile-btn" />
          </button>
        )
      }
      { redirectToProfile.canRedirect && <Redirect to="/profile" />}
      { openFilters.canOpenFilters && <SearchBarHeader /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};

export default Header;

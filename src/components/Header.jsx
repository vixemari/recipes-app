import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import profileImg from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBarHeader from './SearchBarHeader';
import HeaderStyle from '../style/HeaderStyle';

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
    <HeaderStyle>
      <button
        className="btn"
        aria-label="btn"
        src={ profileImg }
        type="button"
        data-testid="profile-top-btn"
        onClick={ handleClickProfile }
      >
        <img className="img" src={ profileImg } alt="profile-btn" />
      </button>

      <h1 className="titleHeader" data-testid="page-title">{title}</h1>
      {
        btnSearch && (
          <button
            className="btn"
            aria-label="btn-search"
            src={ searchIcon }
            type="button"
            data-testid="search-top-btn"
            onClick={ handleClickSearch }
          >
            <img className="img" src={ searchIcon } alt="profile-btn" />
          </button>
        )
      }
      { redirectToProfile.canRedirect && <Redirect to="/profile" />}
      { openFilters.canOpenFilters && <SearchBarHeader /> }
    </HeaderStyle>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import profileImg from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, btnSearch }) {
  const [redirectToProfile, setRedirectToProfile] = useState({ canRedirect: false });

  function handleClick() {
    setRedirectToProfile({ canRedirect: true });
  }

  return (
    <div>
      <button
        aria-label="btn-profile"
        src={ profileImg }
        type="button"
        data-testid="profile-top-btn"
        onClick={ handleClick }
      />
      <h1 data-testid="page-title">{title}</h1>
      {
        btnSearch && (
          <button
            aria-label="btn-search"
            src={ searchIcon }
            type="button"
            data-testid="search-top-btn"
          />
        )
      }
      { redirectToProfile.canRedirect && <Redirect to="/profile" />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};

export default Header;

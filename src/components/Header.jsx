import React from 'react';
import PropTypes from 'prop-types';
import profileImg from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, btnSearch }) {
  return (
    <div>
      <button
        aria-label="btn-profile"
        src={ profileImg }
        type="button"
        data-testid="profile-top-btn"
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
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnSearch: PropTypes.bool.isRequired,
};

export default Header;

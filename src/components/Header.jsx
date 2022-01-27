import React from 'react';
import profileImg from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <button type="button" data-testid="profile-top-btn">
        <img src={ profileImg } alt="profileIcon" />
      </button>
      <h1 data-testid="page-title">Title</h1>
      <button type="button" data-testid="search-top-btn">
        <img src={ searchIcon } alt="searchIcon" />
      </button>
    </div>
  );
}

export default Header;

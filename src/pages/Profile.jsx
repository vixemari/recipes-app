import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function Profile() {
  const [emailLocal, setEmailLocal] = useState('');
  const [redirect, setRedirect] = useState({ canRedirectToFavorite: false,
    canRedirectToDones: false,
    canRedirectToLogin: false });

  const PROFILE = 'Profile';

  function getEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;
    setEmailLocal(email);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
      localStorage.setItem('user', JSON.stringify({ email: 'email@email.com' }));
    }
    getEmail();
  }, []);

  function handleClickFavorites() {
    setRedirect({ ...redirect, canRedirectToFavorite: true });
  }

  function handleClickDones() {
    setRedirect({ ...redirect, canRedirectToDones: true });
  }

  function handleClickLogout() {
    localStorage.clear();
    setRedirect({ ...redirect, canRedirectToLogin: true });
  }

  return (
    <div>
      <Header title={ PROFILE } btnSearch={ false } />
      <p data-testid="profile-email">{ emailLocal }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ handleClickDones }
      >
        Done Recipes
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ handleClickFavorites }
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleClickLogout }
      >
        Logout
      </button>
      <IndexFooter />
      {redirect.canRedirectToDones && <Redirect to="/done-recipes" />}
      {redirect.canRedirectToFavorite && <Redirect to="/favorite-recipes" />}
      {redirect.canRedirectToLogin && <Redirect to="/" />}
    </div>
  );
}

export default Profile;

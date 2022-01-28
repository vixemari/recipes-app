import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';

function Profile() {
  const [emailLocal, setEmailLocal] = useState('');
  const [redirect, setRedirect] = useState({ canRedirectToFavorite: false,
    canRedirectToDones: false,
    canRedirectToLogin: false });

  const PROFILE = 'Profile';

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;
    setEmailLocal(email);
  }, []);

  function handleClickFavorites() {
    setRedirect({ ...redirect, canRedirectToFavorite: true });
  }

  function handleClickDones() {
    setRedirect({ ...redirect, canRedirectToDones: true });
  }

  function handleClickLogout() {
    localStorage.clear();
    // localStorage.setItem('mealsToken', JSON.stringify([]));
    // localStorage.setItem('cocktailsToken', JSON.stringify([]));
    // localStorage.setItem('user', JSON.stringify({}));
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

      {redirect.canRedirectToDones && <Redirect to="/done-recipes" />}
      {redirect.canRedirectToFavorite && <Redirect to="/favorite-recipes" />}
      {redirect.canRedirectToLogin && <Redirect to="/" />}
    </div>
  );
}

export default Profile;

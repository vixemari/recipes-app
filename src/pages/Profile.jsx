import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function Profile() {
  const [emailLocal, setEmailLocal] = useState('');
  const PROFILE = 'Profile';
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;
    setEmailLocal(email);
  }, []);

  return (
    <div>
      <Header title={ PROFILE } btnSearch={ false } />
      <p data-testid="profile-email">{ emailLocal }</p>
      <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
    </div>
  );
}

export default Profile;

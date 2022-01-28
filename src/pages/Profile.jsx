import React from 'react';
import Header from '../components/Header';

function Profile() {
  const PROFILE = 'Profile';
  return (
    <Header title={ PROFILE } btnSearch={ false } />
  );
}

export default Profile;

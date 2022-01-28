import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function Profile() {
  const PROFILE = 'Profile';
  return (
    <div>
      <Header title={ PROFILE } btnSearch={ false } />

      <IndexFooter />
    </div>
  );
}

export default Profile;

import React from 'react';
import Header from '../components/Header';

function ExploreNationalities() {
  const EXPLORE_NATIONALITIES = 'Explore Nationalities';
  return (
    <div>
      <Header title={ EXPLORE_NATIONALITIES } btnSearch />
    </div>
  );
}

export default ExploreNationalities;

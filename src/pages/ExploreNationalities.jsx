import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreNationalities() {
  const EXPLORE_NATIONALITIES = 'Explore Nationalities';
  return (
    <div>
      <Header title={ EXPLORE_NATIONALITIES } btnSearch />

      <IndexFooter />
    </div>
  );
}

export default ExploreNationalities;

import React from 'react';
import Header from '../components/Header';

function ExploreDrinks() {
  const EXPLORE_DRINKS = 'Explore Drinks';
  return (
    <div>
      <Header title={ EXPLORE_DRINKS } btnSearch={ false } />
    </div>
  );
}

export default ExploreDrinks;

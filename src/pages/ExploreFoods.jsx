import React from 'react';
import Header from '../components/Header';

function ExploreFoods() {
  const EXPLORE_FOODS = 'Explore Foods';
  return (
    <div>
      <Header title={ EXPLORE_FOODS } btnSearch={ false } />
    </div>
  );
}

export default ExploreFoods;

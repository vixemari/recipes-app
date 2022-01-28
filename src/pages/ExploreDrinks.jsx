import React from 'react';
import Header from '../components/Header';
import ButtonsOfExplore from '../components/ButtonsOfExplore';

function ExploreDrinks() {
  const EXPLORE_DRINKS = 'Explore Drinks';
  return (
    <div>
      <Header title={ EXPLORE_DRINKS } btnSearch={ false } />
      <ButtonsOfExplore btnNationality={ false } />
    </div>
  );
}

export default ExploreDrinks;

import React from 'react';
import Header from '../components/Header';
import ButtonsOfExplore from '../components/ButtonsOfExplore';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreDrinks() {
  const EXPLORE_DRINKS = 'Explore Drinks';
  return (
    <div>
      <Header title={ EXPLORE_DRINKS } btnSearch={ false } />
      <ButtonsOfExplore btnNationality={ false } />
      <IndexFooter />
    </div>
  );
}

export default ExploreDrinks;

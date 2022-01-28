import React from 'react';
import Header from '../components/Header';
import ButtonsOfExplore from '../components/ButtonsOfExplore';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreFoods() {
  const EXPLORE_FOODS = 'Explore Foods';
  return (
    <div>
      <Header title={ EXPLORE_FOODS } btnSearch={ false } />
      <ButtonsOfExplore btnNationality isFood />
      <IndexFooter />
    </div>
  );
}

export default ExploreFoods;

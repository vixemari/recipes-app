import React from 'react';
import IndexFooter from '../components/footer/IndexFooter';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';

function Foods() {
  const FOOD = 'Foods';

  return (
    <div>
      <Header title={ FOOD } btnSearch />
      <RecipesCard param="meal" />
      <IndexFooter />
    </div>
  );
}

export default Foods;

import React from 'react';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';

function Foods() {
  const FOOD = 'Foods';

  return (
    <div>
      <Header title={ FOOD } btnSearch />
      <RecipesCard param="meal" />
    </div>
  );
}

export default Foods;

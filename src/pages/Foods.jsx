import React from 'react';
import FoodCategory from '../components/FoodCategory';
import IndexFooter from '../components/footer/IndexFooter';
import Header from '../components/Header';
import RecipesCard from '../components/RecipesCard';

function Foods() {
  const FOOD = 'Foods';

  return (
    <div>
      <Header title={ FOOD } btnSearch />
      <FoodCategory />
      <RecipesCard param="meal" />
      <IndexFooter />
    </div>
  );
}

export default Foods;

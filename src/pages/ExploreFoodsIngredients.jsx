import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreFoodsIngredients() {
  const EXPLORE_FOODS_INGREDIENTS = 'Explore Ingredients';
  return (
    <div>
      <Header title={ EXPLORE_FOODS_INGREDIENTS } btnSearch={ false } />

      <IndexFooter />
    </div>
  );
}

export default ExploreFoodsIngredients;

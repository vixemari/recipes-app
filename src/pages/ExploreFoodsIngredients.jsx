import React from 'react';
import Header from '../components/Header';

function ExploreFoodsIngredients() {
  const EXPLORE_FOODS_INGREDIENTS = 'Explore Ingredients';
  return (
    <div>
      <Header title={ EXPLORE_FOODS_INGREDIENTS } btnSearch={ false } />
    </div>
  );
}

export default ExploreFoodsIngredients;

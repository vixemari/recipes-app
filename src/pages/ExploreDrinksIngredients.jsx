import React from 'react';
import Header from '../components/Header';

function ExploreDrinksIngredients() {
  const EXPLORE_DRINKS_INGREDIENTS = 'Explore Ingredients';
  return (
    <div>
      <Header title={ EXPLORE_DRINKS_INGREDIENTS } btnSearch={ false } />
    </div>
  );
}

export default ExploreDrinksIngredients;

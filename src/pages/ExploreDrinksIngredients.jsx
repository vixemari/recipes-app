import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreDrinksIngredients() {
  const EXPLORE_DRINKS_INGREDIENTS = 'Explore Ingredients';
  return (
    <div>
      <Header title={ EXPLORE_DRINKS_INGREDIENTS } btnSearch={ false } />

      <IndexFooter />
    </div>
  );
}

export default ExploreDrinksIngredients;

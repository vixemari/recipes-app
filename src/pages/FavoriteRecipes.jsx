import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  const FAVORITE_RECIPES = 'Favorite Recipes';
  return (
    <Header title={ FAVORITE_RECIPES } btnSearch={ false } />
  );
}

export default FavoriteRecipes;

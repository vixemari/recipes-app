import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  const DONE_RECIPES = 'Done Recipes';
  return (
    <Header title={ DONE_RECIPES } btnSearch={ false } />
  );
}

export default DoneRecipes;

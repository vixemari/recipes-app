import React from 'react';
import Header from '../components/Header';
import CardsDrinks from '../components/DrinksCard';
import DrinkCategory from '../components/DrinkCategory';

function Drinks() {
  const DRINKS = 'Drinks';
  return (
    <div>

      <Header title={ DRINKS } btnSearch />
      <DrinkCategory />
      <CardsDrinks param="drink" />
    </div>
  );
}

export default Drinks;

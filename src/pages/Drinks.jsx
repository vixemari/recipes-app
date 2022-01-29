import React from 'react';
import Header from '../components/Header';
import CardsDrinks from '../components/DrinksCard';

function Drinks() {
  const DRINKS = 'Drinks';
  return (
    <div>

      <Header title={ DRINKS } btnSearch />
      <CardsDrinks param="drink" />
    </div>
  );
}

export default Drinks;

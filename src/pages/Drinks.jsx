import React from 'react';
import Header from '../components/Header';
import CardsDrinks from '../components/DrinksCard';
import IndexFooter from '../components/footer/IndexFooter';


function Drinks() {
  const DRINKS = 'Drinks';
  return (
    <div>

      <Header title={ DRINKS } btnSearch />
      <CardsDrinks param="drink" />
      <IndexFooter />

    </div>
  );
}

export default Drinks;

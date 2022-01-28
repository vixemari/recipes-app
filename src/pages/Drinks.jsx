import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function Drinks() {
  const DRINKS = 'Drinks';
  return (
    <div>
      Drinks
      <Header title={ DRINKS } btnSearch />
      <IndexFooter />
    </div>
  );
}

export default Drinks;

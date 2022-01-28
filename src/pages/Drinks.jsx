import React from 'react';
import Header from '../components/Header';

function Drinks() {
  const DRINKS = 'Drinks';
  return (
    <div>
      Drinks
      <Header title={ DRINKS } btnSearch />
    </div>
  );
}

export default Drinks;

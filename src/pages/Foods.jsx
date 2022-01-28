import React from 'react';
import Header from '../components/Header';

function Foods() {
  const FOOD = 'Foods';
  return (
    <div>
      FOODS
      <Header title={ FOOD } btnSearch />
    </div>
  );
}

export default Foods;

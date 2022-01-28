import React from 'react';
import IndexFooter from '../components/footer/IndexFooter';
import Header from '../components/Header';


function Foods() {
  const FOOD = 'Foods';
  return (
    <div>
      FOODS
      <Header title={ FOOD } btnSearch />
      <IndexFooter />
    </div>
  );
}

export default Foods;

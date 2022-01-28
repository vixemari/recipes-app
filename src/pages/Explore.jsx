import React from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function Explore() {
  const EXPLORE = 'Explore';
  return (
    <div>
      <Header title={ EXPLORE } btnSearch={ false } />
      <IndexFooter />
    </div>
  );
}

export default Explore;

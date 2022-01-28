import React from 'react';
import Header from '../components/Header';

function Explore() {
  const EXPLORE = 'Explore';
  return (
    <div>
      <Header title={ EXPLORE } btnSearch={ false } />
    </div>
  );
}

export default Explore;

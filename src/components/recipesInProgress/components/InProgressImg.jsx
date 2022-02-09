import React from 'react';
import PropTypes from 'prop-types';

export default function InProgressImg({ img, name, category, alcoholic }) {
  return (
    <div className="divDiv">
      <div className="divImg">
        <img
          width="200px"
          src={ img }
          alt="recipe-food"
          data-testid="recipe-photo"
        />
      </div>
      <h1 className="name" data-testid="recipe-title">{ name }</h1>
      <h2 data-testid="recipe-category">{ category }</h2>
      <h2>{ alcoholic }</h2>
    </div>
  );
}

InProgressImg.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
};

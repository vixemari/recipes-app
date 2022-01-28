import React from 'react';
// import PropTypes from 'prop-types';

function SearchBarHeader() {
  const valueIngredient = 'Ingredientes';
  const valueName = 'Nome';
  const valueFirstLetter = 'Primeira Letra';
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
      />
      <input
        type="radio"
        value={ valueIngredient }
        name={ valueIngredient }
        data-testid="ingredient-search-radio"
      />
      Ingredientes
      <input
        type="radio"
        value={ valueName }
        name={ valueIngredient }
        data-testid="name-search-radio"
      />
      Name
      <input
        type="radio"
        value={ valueFirstLetter }
        name={ valueIngredient }
        data-testid="first-letter-search-radio"
      />
      Primeira Letra
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        heijoe
      </button>
    </div>
  );
}

// InputHeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   btnSearch: PropTypes.bool.isRequired,
// };
//
export default SearchBarHeader;

import React from 'react';

function Buttons() {
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        all
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        drink
      </button>
    </div>
  );
}

export default Buttons;

import React, { useContext } from 'react';
import Context from '../context/Context';

const MAX_LENGTH = 4;

function DrinkCategory() {
  const { drinkCategory } = useContext(Context);
  const maxCategories = drinkCategory.filter((category, index) => index <= MAX_LENGTH);

  return (
    <div>
      <button
        data-testid="All-category-filter"
        type="button"
      >
        All

      </button>
      { maxCategories.map(({ strCategory }, index) => (
        <div key={ index }>
          <button
            type="button"
            id={ `${strCategory}-category-btn` }
            value={ strCategory }
            data-testid={ `${strCategory}-category-filter` }

          >
            { strCategory }
          </button>
        </div>
      ))}
    </div>
  );
}

export default DrinkCategory;

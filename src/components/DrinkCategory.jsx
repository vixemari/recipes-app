import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import { filter } from '../service/fetchApi';

const MAX_LENGTH = 4;
export default function DrinkCategoryFilter() {
  const { drinkCategory, setDrinks, drinks } = useContext(Context);
  const [toogle, setToogle] = useState('');
  const [untoogle, setUntoogle] = useState([]);

  const handleClick = async ({ target }) => {
    const { value } = target;
    setToogle(value);
    if (toogle === value || value === 'All') {
      setDrinks(untoogle);
      setToogle('');
    } else {
      const data = await filter(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
      setUntoogle(drinks);
      setDrinks(data.drinks);
    }
  };
  const maxDrinks = drinkCategory.filter((meal, index) => index <= MAX_LENGTH);

  return (
    <form>
      { maxDrinks.map(({ strCategory }, index) => (
        <div key={ index }>
          <button
            type="button"
            id={ `${strCategory}-category-btn` }
            value={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleClick }
          >
            { strCategory }
          </button>
        </div>
      ))}
      <button
        type="button"
        id="All-category-btn"
        value="All"
        data-testid="All-category-filter"
        onClick={ handleClick }
      >
        All
      </button>
    </form>
  );
}

import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import { filter } from '../service/fetchApi';
import DrinkCategoryStyle from '../style/DrinkCategory';

const MAX_LENGTH = 4;
export default function DrinkCategoryFilter() {
  const { drinkCategory, setDrinks, drinks, setFiltered } = useContext(Context);
  const [toogle, setToogle] = useState('');
  const [untoogle, setUntoogle] = useState([]);

  const handleClick = async ({ target }) => {
    const { value } = target;
    setToogle(value);
    if (toogle === value || value === 'All') {
      setDrinks(untoogle);
      setToogle('');
      setFiltered([]);
    } else {
      const data = await filter(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
      setUntoogle(drinks);
      setDrinks(data.drinks);
      setFiltered([]);
    }
  };
  const maxDrinks = drinkCategory.filter((_, index) => index <= MAX_LENGTH);

  return (
    <DrinkCategoryStyle>
      <div className="allBtns">
        { maxDrinks.map(({ strCategory }, index) => (
          <button
            key={ index }
            type="button"
            id={ `${strCategory}-category-btn` }
            value={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleClick }
          >
            { strCategory }
          </button>
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
      </div>
    </DrinkCategoryStyle>
  );
}

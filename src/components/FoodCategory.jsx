import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import { filter } from '../service/fetchApi';

const MAX_LENGTH = 4;
export default function FoodCategoryFilter() {
  const { recipesCategory, setRecipes, recipes } = useContext(Context);
  const [toogle, setToogle] = useState('');
  const [untoogle, setUntoogle] = useState([]);

  const handleClick = async ({ target }) => {
    const { value } = target;
    setToogle(value);
    if (toogle === value || value === 'All') {
      setRecipes(untoogle);
      setToogle('');
    } else {
      const data = await filter(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
      setUntoogle(recipes);
      setRecipes(data.meals);
    }
  };
  const foods = recipesCategory.filter((meal, index) => index <= MAX_LENGTH);
  return (
    <form>
      { foods.map(({ strCategory }, index) => (
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

import React, { useState, useContext } from 'react';
import Context from '../context/Context';
import { filter } from '../service/fetchApi';
import FoodCategoryStyle from '../style/FoodCategory';

const MAX_LENGTH = 4;
export default function FoodCategoryFilter() {
  const { recipesCategory, setRecipes, recipes, setFiltered } = useContext(Context);
  const [toogle, setToogle] = useState('');
  const [untoogle, setUntoogle] = useState([]);

  const handleClick = async ({ target }) => {
    const { value } = target;
    setToogle(value);
    if (toogle === value || value === 'All') {
      setRecipes(untoogle);
      setToogle('');
      setFiltered([]);
    } else {
      const data = await filter(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
      setUntoogle(recipes);
      setRecipes(data.meals);
      setFiltered([]);
    }
  };
  const foods = recipesCategory.filter((_, index) => index <= MAX_LENGTH);
  return (
    <FoodCategoryStyle>
      <div className="allBtns">
        { foods.map(({ strCategory }, index) => (
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
    </FoodCategoryStyle>
  );
}

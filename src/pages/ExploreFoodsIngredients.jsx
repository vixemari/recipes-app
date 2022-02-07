import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';
import { filter } from '../service/fetchApi';

function ExploreFoodsIngredients() {
  const EXPLORE_FOODS_INGREDIENTS = 'Explore Ingredients';
  const MAX_LENGTH = 12;

  const [mealIngredientes, setMealIngredientes] = useState([]);

  const fetchIngredients = async () => {
    const resultApi = await filter('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const recipes = resultApi.meals.slice(0, MAX_LENGTH);
    setMealIngredientes(recipes);
  };

  useEffect(() => { fetchIngredients(); }, []);

  return (
    <div>
      <Header title={ EXPLORE_FOODS_INGREDIENTS } btnSearch={ false } />
      { mealIngredientes.map(({ strIngredient }, index) => (
        <button
          key={ index }
          type="button"

        >
          <section data-testid={ `${index}-ingredient-card` }>
            <h1
              data-testid={ `${index}-card-name` }
            >
              { strIngredient }
            </h1>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png ` }
              alt={ strIngredient }
            />
          </section>
        </button>
      )) }
      <IndexFooter />
    </div>
  );
}

export default ExploreFoodsIngredients;

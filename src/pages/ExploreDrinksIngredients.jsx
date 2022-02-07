import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';
import { filter } from '../service/fetchApi';

function ExploreDrinksIngredients() {
  const EXPLORE_DRINKS_INGREDIENTS = 'Explore Ingredients';
  const MAX_LENGTH = 12;
  const [drinkIngredientes, setDrinkIngredientes] = useState([]);

  const fetchDrinkIngredients = async () => {
    const resultApi = await filter('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const recipes = resultApi.drinks.slice(0, MAX_LENGTH);
    setDrinkIngredientes(recipes);
  };

  useEffect(() => { fetchDrinkIngredients(); }, []);
  return (
    <div>
      <Header title={ EXPLORE_DRINKS_INGREDIENTS } btnSearch={ false } />
      { drinkIngredientes.map(({ strIngredient1 }, index) => (
        <button
          key={ index }
          type="button"
        >
          <section data-testid={ `${index}-ingredient-card` } key={ index }>
            <h1
              data-testid={ `${index}-card-name` }
            >
              { strIngredient1 }
            </h1>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png ` }
              alt={ strIngredient1 }
            />
          </section>
        </button>
      )) }
      <IndexFooter />
    </div>
  );
}

export default ExploreDrinksIngredients;

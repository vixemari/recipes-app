import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getDrinks, getMeals, getFoodCategories,
  getDrinksCategories, getMealsForId, getDrinksForId } from '../service/fetchApi';

function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [recipesCategory, setRecipesCategory] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true);
  const [enableBtn, setEnableBtn] = useState(0);

  const [mealId, setMealId] = useState('');
  const [contentMeal, setContentMeal] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [drinkId, setdrinkId] = useState('');
  const [contentDrinkId, setcontentDrinkId] = useState([]);
  const contextValue = {
    recipes,
    setRecipes,
    drinks,
    setDrinks,
    recipesCategory,
    setRecipesCategory,
    drinkCategory,
    setDrinkCategory,

    isFetch,
    setMealId,
    contentMeal,
    setContentMeal,
    mealId,
    setdrinkId,
    contentDrinkId,

    filtered,
    setFiltered,

    disableBtn,
    setDisableBtn,
    enableBtn,
    setEnableBtn,
  };

  useEffect(() => {
    async function requireDrinkForId() {
      if (drinkId !== '') {
        const drinkResult = await getDrinksForId(drinkId)
          .then((response) => setcontentDrinkId(response.drinks));
        setIsFetch(false);
        return drinkResult;
      }
    }
    requireDrinkForId();
  }, [drinkId]);

  useEffect(() => {
    async function requireMealForId() {
      if (mealId !== '') {
        console.log(mealId);
        const mealResult = await getMealsForId(mealId)
          .then(({ meals }) => setContentMeal(meals));
        setIsFetch(false);
        return mealResult;
      }
    }
    requireMealForId();
  }, [mealId]);

  useEffect(() => {
    async function inicialRecipes() {
      const mealsResult = await getMeals();
      const drinksResult = await getDrinks();
      setRecipes(mealsResult);
      setDrinks(drinksResult);
    }
    inicialRecipes();
  }, []);

  useEffect(() => {
    async function inicialCategory() {
      const categoryFoodResult = await getFoodCategories();
      const categoryDrinksResult = await getDrinksCategories();
      setRecipesCategory(categoryFoodResult);
      setDrinkCategory(categoryDrinksResult);
    }
    inicialCategory();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}
//

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

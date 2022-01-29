import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getDrinks, getMeals } from '../service/fetchApi';

function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const contextValue = {
    recipes,
    setRecipes,
    drinks,
    setDrinks,
  };
  useEffect(() => {
    async function inicialRecipes() {
      const mealsResult = await getMeals();
      const drinksResult = await getDrinks();
      setRecipes(mealsResult);
      setDrinks(drinksResult);
    }
    inicialRecipes();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

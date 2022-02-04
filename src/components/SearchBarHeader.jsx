import React, { useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Context from '../context/Context';
import {
  fetchSearchBarFoodsIgredient,
  fetchSearchBarFoodsName,
  fetchSearchBarFoodsFirstLetter,
  fetchSearchBarDrinksIngredient,
  fetchSearchBarDrinksName,
  fetchSearchBarDrinksFirstLetter,
} from '../service/fetchApi';

function SearchBarHeader() {
  const context = useContext(Context);
  const { setFiltered } = context;
  // location para pegar as rotas
  const location = useLocation();
  const history = useHistory();

  // valores dos radios
  const valueName = 'name';
  const valueIngredient = 'ingredient';
  const valueFirstLetter = 'firstLetter';

  // declaração dos states
  const [radioSelectedState, setRadioSelectedState] = useState('');
  const [inputSearchState, setInputSearchState] = useState('');

  // funções onChange dos inputs
  const onChangeRadio = ({ target }) => {
    setRadioSelectedState(target.value);
  };

  const onChangeInput = ({ target }) => {
    setInputSearchState(target.value);
  };

  // função pra deixar a primeira letra maiúscula de cada radio
  const firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.substring(1);

  // funções que redireciona para a página caso haja apenas uma receita
  const redirectToFood = (id) => {
    history.push(`/foods/${id}`);
  };

  const redirectToDrink = (id) => {
    history.push(`/drinks/${id}`);
  };

  // função do click, faz a requisição da API
  const getFoodFilter = async () => {
  // const onHandleClick = () => {
    let response;
    if (radioSelectedState === 'ingredient') {
      response = await fetchSearchBarFoodsIgredient(inputSearchState);
      setFiltered(response);
    }
    if (radioSelectedState === 'name') {
      response = await fetchSearchBarFoodsName(inputSearchState);
      setFiltered(response);
    }
    if (radioSelectedState === 'firstLetter') {
      response = await fetchSearchBarFoodsFirstLetter(inputSearchState);
      setFiltered(response);
    }
    if (response && response.meals !== null && response.meals.length === 1) {
      const { idMeal } = response.meals[0];
      redirectToFood(idMeal);
    }
    // console.log(response);
  };

  const getDrinksFilter = async () => {
    let response;
    if (radioSelectedState === 'ingredient') {
      response = await fetchSearchBarDrinksIngredient(inputSearchState);
      setFiltered(response);
    }
    if (radioSelectedState === 'name') {
      response = await fetchSearchBarDrinksName(inputSearchState);
      setFiltered(response);
    }
    if (radioSelectedState === 'firstLetter') {
      response = await fetchSearchBarDrinksFirstLetter(inputSearchState);
      setFiltered(response);
    }
    if (response && response.drinks !== null && response.drinks.length === 1) {
      const { idDrink } = response.drinks[0];
      redirectToDrink(idDrink);
    }
  };

  const onHandleClick = () => {
    if (location.pathname === '/foods') {
      getFoodFilter();
    } else {
      getDrinksFilter();
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        onChange={ onChangeInput }
      />
      <input
        type="radio"
        value={ valueIngredient }
        name={ valueIngredient }
        onChange={ onChangeRadio }
        data-testid="ingredient-search-radio"
      />
      { firstLetterToUpperCase(valueIngredient) }
      <input
        type="radio"
        value={ valueName }
        name={ valueIngredient }
        onChange={ onChangeRadio }
        data-testid="name-search-radio"
      />
      { firstLetterToUpperCase(valueName) }
      <input
        type="radio"
        value={ valueFirstLetter }
        name={ valueIngredient }
        onChange={ onChangeRadio }
        data-testid="first-letter-search-radio"
      />
      { firstLetterToUpperCase(valueFirstLetter) }
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ onHandleClick }
      >
        heijoe
      </button>
    </div>
  );
}

export default SearchBarHeader;

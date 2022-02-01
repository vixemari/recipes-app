import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  fetchSearchBarFoodsIgredient,
  fetchSearchBarFoodsName,
  fetchSearchBarFoodsFirstLetter,
  fetchSearchBarDrinksIngredient,
  fetchSearchBarDrinksName,
  fetchSearchBarDrinksFirstLetter,
} from '../service/fetchApi';

function SearchBarHeader() {
  // location para pegar a rota
  const location = useLocation();

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

  // função do click, faz a requisição da API
  const getFoodFilter = () => {
  // const onHandleClick = () => {
    if (radioSelectedState === 'ingredient') {
      fetchSearchBarFoodsIgredient(inputSearchState);
    }
    if (radioSelectedState === 'name') {
      fetchSearchBarFoodsName(inputSearchState);
    }
    if (radioSelectedState === 'firstLetter') {
      fetchSearchBarFoodsFirstLetter(inputSearchState);
    }
  };

  const getDrinksFilter = () => {
    console.log('hei');
    if (radioSelectedState === 'ingredient') {
      fetchSearchBarDrinksIngredient(inputSearchState);
    }
    if (radioSelectedState === 'name') {
      fetchSearchBarDrinksName(inputSearchState);
    }
    if (radioSelectedState === 'firstLetter') {
      fetchSearchBarDrinksFirstLetter(inputSearchState);
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

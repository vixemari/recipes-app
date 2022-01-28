import React, { useState } from 'react';
import {
  fetchSearchBarHeaderIgredient,
  fetchSearchBarHeaderName,
  fetchSearchBarHeaderFirstLetter,
} from '../service/fetchApi';

function SearchBarHeader() {
  // valores dos radios
  const valueIngredient = 'ingredient';
  const valueName = 'name';
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
  const onHandleClick = () => {
    if (radioSelectedState === 'ingredient') {
      fetchSearchBarHeaderIgredient(inputSearchState);
    }
    if (radioSelectedState === 'name') {
      fetchSearchBarHeaderName(inputSearchState);
    }
    if (radioSelectedState === 'firstLetter') {
      fetchSearchBarHeaderFirstLetter(inputSearchState);
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

// InputHeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   btnSearch: PropTypes.bool.isRequired,
// };
//
export default SearchBarHeader;

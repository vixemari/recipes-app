import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ButtonsOfExplore({ btnNationality, isFood }) {
  const history = useHistory();

  function redirectToFood() {
    return history.push('/explore/foods/ingredients');
  }

  function redirectToDrinks() {
    return history.push('/explore/drinks/ingredients');
  }

  function handleClickIngredient() {
    return isFood ? redirectToFood() : redirectToDrinks();
  }

  function handleClickNationality() {
    return history.push('/explore/foods/nationalities');
  }

  return (
    <div>
      <button
        onClick={ handleClickIngredient }
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      {
        btnNationality && (
          <button
            aria-label="btn-nationality"
            type="button"
            data-testid="explore-by-nationality"
            onClick={ handleClickNationality }
          >
            By Nationality
          </button>
        )
      }

    </div>
  );
}

ButtonsOfExplore.propTypes = {
  btnNationality: PropTypes.bool.isRequired,
  isFood: PropTypes.bool.isRequired,
};

export default ButtonsOfExplore;

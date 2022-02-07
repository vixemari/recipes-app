import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function StartDrinkBtn({ id }) {
  const history = useHistory();

  function handleClick() {
    return history.push(`/drinks/${id}/in-progress`);
  }

  return (
    <button
      className="button"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ handleClick }
    >
      Start Recipe
    </button>
  );
}

StartDrinkBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StartDrinkBtn;

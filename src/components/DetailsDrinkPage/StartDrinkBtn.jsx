import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';

function StartDrinkBtn({ id }) {
  const history = useHistory();
  const location = useLocation();

  function handleClick() {
    return history.push(`/drinks/${id}/in-progress`);
  }
  const [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    const inProgressRecipes = {
      cocktails: {
        0: [],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    const recipeStarted = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const item = (Object.keys(recipeStarted.cocktails));
    if (item[0] === path) {
      setOk(true);
    }
  }, []);

  return (
    <button
      className="startBtn"
      type="button"
      data-testid="start-recipe-btn"
      onClick={ handleClick }
    >
      { ok ? 'Continue Recipe' : 'Start Recipe' }
    </button>
  );
}

StartDrinkBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default StartDrinkBtn;

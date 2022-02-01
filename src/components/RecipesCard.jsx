import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

const MAX_LENGTH = 11;
function CardsFood() {
  const { recipes } = useContext(Context);
  const recipesMax = recipes.filter((recipe, index) => index <= MAX_LENGTH);

  return (
    recipesMax.map(({ idMeal, strMealThumb, strMeal }, index) => (
      <Link to={ `/foods/${idMeal}` } key={ idMeal }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            style={ { height: '5em' } }
            src={ strMealThumb }
            alt={ strMeal }
          />
          <p data-testid={ `${index}-card-name` }>{strMeal}</p>
        </div>
      </Link>
    ))
  );
}

export default CardsFood;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardsByArea({ foodArea }) {
  const MAX_LENGTH = 11;
  if (foodArea === null) return <p>Carregando...</p>;

  const areas = foodArea.filter((area, index) => index <= MAX_LENGTH);

  return (
    areas.map(({ idMeal, strMealThumb, strMeal }, index) => (
      <Link to={ `/comidas/${idMeal}` } key={ idMeal }>
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

CardsByArea.propTypes = {
  foodArea: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsByArea;

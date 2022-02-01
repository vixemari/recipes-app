import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

const MAX_LENGTH = 11;
function CardsDrinks() {
  const { drinks } = useContext(Context);
  const drinksMax = drinks.filter((drink, index) => index <= MAX_LENGTH);

  return (
    drinksMax.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
      <Link to={ `/drinks/${idDrink}` } key={ idDrink }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            style={ { height: '5em' } }
            src={ strDrinkThumb }
            alt={ strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{strDrink}</p>
        </div>
      </Link>
    ))
  );
}

export default CardsDrinks;

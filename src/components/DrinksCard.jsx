import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

const MAX_LENGTH = 11;

function CardsDrinks() {
  // context
  const context = useContext(Context);
  const { drinks, filtered } = context;

  let drinksDefault = drinks.filter((_, index) => index <= MAX_LENGTH);
  const [drinksForRenderState, setDrinksForRenderState] = useState(drinksDefault);

  useEffect(() => {
    if (drinksForRenderState.length === 0) {
      setDrinksForRenderState(drinksDefault);
    }
  }, [drinks]);

  useEffect(() => {
    drinksDefault = drinks.filter((_, index) => index <= MAX_LENGTH);
    if (filtered !== undefined) {
      if (filtered.drinks !== undefined) {
        const newDrinks = filtered.drinks.filter((_, index) => index <= MAX_LENGTH);
        setDrinksForRenderState(newDrinks);
      } else {
        setDrinksForRenderState(drinksDefault);
      }
    }
  }, [drinks, filtered]);

  return (
    drinksForRenderState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
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

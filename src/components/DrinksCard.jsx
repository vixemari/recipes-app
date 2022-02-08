import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import RecipesCardStyle from '../style/RecipesCardStyle';

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
    <RecipesCardStyle>
      {
        drinksForRenderState.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
          <Link className="imgLink" to={ `/drinks/${idDrink}` } key={ idDrink }>
            <div className="imgDiv" data-testid={ `${index}-recipe-card` }>
              <img
                className="image"
                data-testid={ `${index}-card-img` }
                src={ strDrinkThumb }
                alt={ strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{strDrink}</p>
            </div>
          </Link>
        ))
      }
    </RecipesCardStyle>
  );
}

export default CardsDrinks;

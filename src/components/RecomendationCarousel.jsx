import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import './recomendationStyle.css';

function RecomendationCarousel({ isRecipeFood }) {
  const MAX_LENGTH = 5;
  const { drinks, recipes } = useContext(Context);
  function recomendationFood() {
    const drinksMax = drinks.filter((drink, index) => index <= MAX_LENGTH);
    return (
      <div className="carousel">
        {drinksMax.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
          <Link className="wrapper_child" to={ `/drinks/${idDrink}` } key={ idDrink }>
            <div className="tab" data-testid={ `${index}-recomendation-card` }>
              <img
                data-testid={ `${index}-card-img` }
                style={ { height: '5em' } }
                src={ strDrinkThumb }
                alt={ strDrink }
              />
              <p data-testid={ `${index}-recomendation-title` }>{strDrink}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  function recomendationDrink() {
    const recipesMax = recipes.filter((recipe, index) => index <= MAX_LENGTH);
    return (
      <div className="carousel">
        { recipesMax.map(({ idMeal, strMealThumb, strMeal }, index) => (
          <Link className="wrapper_child" to={ `/foods/${idMeal}` } key={ idMeal }>
            <div className="tab" data-testid={ `${index}-recomendation-card` }>
              <img
                className="recomendation"
                data-testid={ `${index}-card-img` }
                style={ { height: '5em' } }
                src={ strMealThumb }
                alt={ strMeal }
              />
              <p data-testid={ `${index}-recomendation-title` }>{strMeal}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return isRecipeFood ? recomendationFood() : recomendationDrink();
}

export default RecomendationCarousel;

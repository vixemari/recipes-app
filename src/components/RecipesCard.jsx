// heijoe
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import RecipesCardStyle from '../style/RecipesCardStyle';

const MAX_LENGTH = 11;

function CardsFood() {
  // context
  const context = useContext(Context);
  const { recipes, filtered } = context;

  let recipesDefault = recipes.filter((_, index) => index <= MAX_LENGTH);

  const [recipesForRenderState, setRecipesForRenderState] = useState(recipesDefault);

  // renderização inicial
  useEffect(() => {
    if (recipesForRenderState.length === 0) {
      setRecipesForRenderState(recipesDefault);
    }
  }, [recipes]);

  // logica para realizar o filtro
  // o button de SearchBarHeader ativa os fetchs da API e joga no context

  // verifica se existe algum valor dentro do filtro do context e substitui o valor a ser renderizado

  useEffect(() => {
    recipesDefault = recipes.filter((_, index) => index <= MAX_LENGTH);
    if (filtered !== undefined) {
      if (filtered.meals !== undefined) {
        const newRecipes = filtered.meals.filter((_, index) => index <= MAX_LENGTH);
        setRecipesForRenderState(newRecipes);
      } else {
        setRecipesForRenderState(recipesDefault);
      }
    }
  }, [recipes, filtered]);

  return (
    <RecipesCardStyle>
      {
        recipesForRenderState.map(({ idMeal, strMealThumb, strMeal }, index) => (
          <Link to={ `/foods/${idMeal}` } key={ idMeal } className="imgLink">
            <div data-testid={ `${index}-recipe-card` } className="imgDiv">
              <img
                className="image"
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt={ strMeal }
              />
              <p data-testid={ `${index}-card-name` }>{strMeal}</p>
            </div>
          </Link>
        ))
      }
    </RecipesCardStyle>
  );
}

export default CardsFood;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDrinksById } from '../service/fetchApi';

function DetailsRecipeDrink({ match }) {
  const [drink, setDrink] = useState();

  useEffect(() => {
    const { id } = match.params;
    async function getDrink() {
      const drinkResult = await getDrinksById(id);
      console.log(drinkResult);
      setDrink(drinkResult);
    }
    getDrink();
  }, []);

  if (drink) {
    const entries = Object.entries(drink);
    let id = 0;
    return (
      <div>
        <img
          src={ drink.strDrinkThumb }
          alt="drink-Details"
          data-testid="recipe-photo"
          width="100px"
        />

        <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">{ drink.strAlcoholic }</p>
        {/* Aqui fica os ingredientes - requisito 33 */}
        <ul>
          Ingredients:
          {entries.map((entrie) => {
            if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
              if (entrie[0].includes('strIngredient1')) {
                id = 0;
              } else {
                id += 1;
              }
              return (
                <li
                  data-testid={ `${id}-ingredient-name-and-measure` }
                >
                  {`${entrie[1]} -`}
                </li>
              );
            }
            return '';
          })}
        </ul>
        <p data-testid="instructions">{ drink.strInstructions }</p>
        {/* Aqui fica o card de receitas recomendandas requisito 33 */}
        <div data-testid="0-recomendation-card">Recomendações</div>
        <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
      </div>
    );
  }
  return (<p>Carregando</p>);
}

DetailsRecipeDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsRecipeDrink;

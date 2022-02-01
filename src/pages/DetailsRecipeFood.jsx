import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFoodById } from '../service/fetchApi';

function DetailsRecipeFood({ match }) {
  const [food, setFood] = useState();

  useEffect(() => {
    const { id } = match.params;
    async function getFood() {
      const foodResult = await getFoodById(id);
      console.log(foodResult);
      setFood(foodResult);
    }
    getFood();
  }, []);

  if (food) {
    let id = 0;
    const entries = Object.entries(food);
    console.log(entries);
    return (
      <div>
        <img
          src={ food.strMealThumb }
          alt="recipeDetails"
          data-testid="recipe-photo"
          width="100px"
        />
        <h1 data-testid="recipe-title">{ food.strMeal }</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="favorite-btn">Favoritar</button>
        <p data-testid="recipe-category">{ food.strCategory }</p>
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

        <p data-testid="instructions">{food.strInstructions }</p>
        {/* Aqui fica o video do you tube requisito 33 */}
        <iframe
          width="200"
          src={ food.strYoutube.replace('watch?v=', 'embed/') }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Aqui fica o card de receitas recomendandas requisito 33 */}
        <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
      </div>
    );
  }
  return (<p>Carregando</p>);
}

DetailsRecipeFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsRecipeFood;

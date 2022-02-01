import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function DetailsRecipeFood({ match }) {
  const { recipes } = useContext(Context);
  // console.log(recipes);
  const { id } = match.params;
  const details = recipes.filter((recipe) => recipe.idMeal === id);
  if (details[0]) {
    const entries = Object.entries(details[0]);
    console.log(entries);
    // console.log(details[0]);
    return (
      <div>
        <img
          src={ details[0].strMealThumb }
          alt="recipeDetails"
          data-testid="recipe-photo"
          width="100px"
        />
        <h1 data-testid="recipe-title">{ details[0].strMeal }</h1>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        <button type="button" data-testid="sfavorite-btn">Favoritar</button>
        <p data-testid="recipe-category">{ details[0].strCategory }</p>
        {/* Aqui fica os ingredientes - requisito 33 */}
        <ul>
          Ingredients:
          {entries.map((entrie) => {
            if (entrie[0].includes('strIngredient') && entrie[1] !== '') {
              return (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {`${entrie[1]} - ${entrie[0].includes(`strMeasure[${index + 1}]`)[1]}`}
                </li>
              );
            }
            return '';
          })}
        </ul>

        <p data-testid="instructions">{ details[0].strInstructions }</p>
        {/* Aqui fica o video do you tube requisito 33 */}
        <iframe
          width="200"
          src={ details[0].strYoutube.replace('watch?v=', 'embed/') }
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

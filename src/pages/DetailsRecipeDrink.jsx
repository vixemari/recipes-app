import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { getDrinksById } from '../service/fetchApi';
import shareIcon from '../images/shareIcon.svg';
import './details.css';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecomendationCarousel from '../components/RecomendationCarousel';

const copy = require('clipboard-copy');

function DetailsRecipeDrink({ match }) {
  const [drink, setDrink] = useState();
  const [copyLink, setCopyLink] = useState({ isLinkCopied: false });
  // const [canFavoriteRecipe, setCanFavoriteRecipe] = useState({ isFavoriteRecipe: false });

  useEffect(() => {
    const { id } = match.params;
    async function getDrink() {
      const drinkResult = await getDrinksById(id);
      console.log(drinkResult);
      setDrink(drinkResult);
    }
    getDrink();
  }, []);

  const history = useHistory();
  const location = useLocation();
  function handleClick() {
    const { id } = match.params;
    return history.push(`/drinks/${id}/in-progress`);
  }

  function handleClickShare() {
    setCopyLink({ isLinkCopied: true });
    const { pathname } = location;
    const link = `http://localhost:3000${pathname}`;
    copy(link);
  }

  function favoriteRecipe(event) {
    event.preventDefault();
    setCanFavoriteRecipe(
      ({ isFavoriteRecipe }) => ({ isFavoriteRecipe: !isFavoriteRecipe }),
    );
  }

  function getMeasures(entries) {
    const currentMeasure = entries.reduce((acc, entrie) => {
      if (entrie[0].includes('strMeasure')
        && entrie[1] !== null && entrie[1] !== '') {
        acc.push(entrie[1]);
      }
      return acc;
    }, []);
    return currentMeasure;
  }

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
        <button
          type="button"
          data-testid="share-btn"
          onClick={ handleClickShare }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
        {copyLink.isLinkCopied && <p>Link copied!</p>}

        <button
          type="button"
          data-testid="favorite-btn"
          // src={ canFavoriteRecipe.isFavoriteRecipe ? blackHeartIcon : whiteHeartIcon }
          onClick={ favoriteRecipe }
        >
          {/* {canFavoriteRecipe.isFavoriteRecipe
            ? (<img src={ blackHeartIcon } alt="blackHeart" />)
            : (<img src={ whiteHeartIcon } alt="whiteHeart" />)} */}
        </button>

        <p data-testid="recipe-category">{ drink.strAlcoholic }</p>
        {/* Aqui fica os ingredientes - requisito 33 */}
        <ul>
          Ingredients:
          {entries.map((entrie) => {
            getMeasures(entries);
            if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
              if (entrie[0].includes('strIngredient1')) {
                id = 0;
              } else {
                id += 1;
              }
              const measures = getMeasures(entries);
              return (
                <li
                  data-testid={ `${id}-ingredient-name-and-measure` }
                >
                  {`${entrie[1]} - ${measures[id]}`}
                </li>
              );
            }
            return '';
          })}
        </ul>
        <p data-testid="instructions">{ drink.strInstructions }</p>
        {/* Aqui fica o card de receitas recomendandas requisito 33 */}
        <RecomendationCarousel isRecipeFood={ false } />
        <button
          className="button"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ handleClick }
        >
          Start Recipe
        </button>

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

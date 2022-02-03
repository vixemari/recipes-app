import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { getFoodById } from '../service/fetchApi';
import shareIcon from '../images/shareIcon.svg';
import RecomendationCarousel from '../components/RecomendationCarousel';
import setLocalStorage from '../service/setLocalStorage';
import './details.css';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

// const favoriteRecipesByLocalStorage = localStorage.getItem('favoriteRecipes');
// checkIsFavoriteRecipes = (recipe) => (recipe.id === food.idMeal);
// const [canFavoriteRecipe, setCanFavoriteRecipe] = useState(
//   { isFavoriteRecipe: favoriteRecipesByLocalStorage
//     .some(checkIsFavoriteRecipes),
//   },
// );

function DetailsRecipeFood({ match }) {
  const [food, setFood] = useState();
  const [copyLink, setCopyLink] = useState({ isLinkCopied: false });
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { id } = match.params;
    async function getFood() {
      const foodResult = await getFoodById(id);
      setFood(foodResult);
    }
    getFood();
  }, []);

  function handleClick() {
    const { id } = match.params;
    return history.push(`/foods/${id}/in-progress`);
  }

  function handleClickShare() {
    setCopyLink({ isLinkCopied: true });
    const { pathname } = location;
    const link = `http://localhost:3000${pathname}`;
    copy(link);
  }

  function favoriteRecipe(event) {
    event.preventDefault();
    setLocalStorage(food);
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

  if (food) {
    let id = 0;
    const entries = Object.entries(food);
    return (
      <div>
        <img
          src={ food.strMealThumb }
          alt="recipeDetails"
          data-testid="recipe-photo"
          width="100px"
        />
        <h1 data-testid="recipe-title">{ food.strMeal }</h1>
        <button
          src={ shareIcon }
          type="button"
          data-testid="share-btn"
          onClick={ handleClickShare }
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

        <p data-testid="recipe-category">{ food.strCategory }</p>
        <ul>
          Ingredients:
          {entries.map((entrie) => {
            getMeasures(entries);
            if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
              // eslint-disable-next-line no-unused-expressions
              entrie[0].includes('strIngredient1') ? id = 0 : id += 1;
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

        <p data-testid="instructions">{food.strInstructions }</p>
        <iframe
          data-testid="video"
          width="200"
          src={ food.strYoutube.replace('watch?v=', 'embed/') }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
          autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <RecomendationCarousel isRecipeFood />
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

DetailsRecipeFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsRecipeFood;

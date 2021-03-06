import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getFoodById } from '../service/fetchApi';
import shareIcon from '../images/shareIcon.svg';
import RecomendationCarousel from '../components/RecomendationCarousel';
import FavoriteBtn from '../components/DetailsPage/FavoriteBtn';
import StartBtn from '../components/DetailsPage/StartBtn';
import Ul from '../components/DetailsPage/Ul';
import DetailsStyle from '../style/Details';

const copy = require('clipboard-copy');

function DetailsRecipeFood({ match }) {
  const [food, setFood] = useState();
  const [copyLink, setCopyLink] = useState({ isLinkCopied: false });
  const location = useLocation();

  useEffect(() => {
    const { id } = match.params;
    async function getFood() {
      const foodResult = await getFoodById(id);
      setFood(foodResult);
    }
    getFood();
  }, []);

  function handleClickShare() {
    setCopyLink({ isLinkCopied: true });
    const { pathname } = location;
    const link = `http://localhost:3000${pathname}`;
    copy(link);
  }

  if (food) {
    const id = 0;
    const entries = Object.entries(food);
    const { id: idOfParams } = match.params;
    return (
      <DetailsStyle>
        <div className="divImg">
          <img
            className="image"
            src={ food.strMealThumb }
            alt="recipeDetails"
            data-testid="recipe-photo"
            width="100px"
          />
        </div>
        <h1 className="title" data-testid="recipe-title">{ food.strMeal }</h1>
        <div className="divBtnIcon">
          <button
            src={ shareIcon }
            type="button"
            data-testid="share-btn"
            onClick={ handleClickShare }
          >
            <img src={ shareIcon } alt="share icon" />
          </button>
          {copyLink.isLinkCopied && <p>Link copied!</p>}

          <FavoriteBtn food={ food } />
        </div>
        <p className="category" data-testid="recipe-category">{ food.strCategory }</p>
        <Ul entriesOfProps={ entries } id={ id } />
        <p className="inst" data-testid="instructions">{food.strInstructions }</p>
        <iframe
          className="ytVideo"
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
        <StartBtn id={ idOfParams } />

      </DetailsStyle>
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

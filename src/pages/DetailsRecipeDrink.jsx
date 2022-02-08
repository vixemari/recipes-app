import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getDrinksById } from '../service/fetchApi';
import shareIcon from '../images/shareIcon.svg';
import RecomendationCarousel from '../components/RecomendationCarousel';
import FavoriteDrinkBtn from '../components/DetailsDrinkPage/FavoriteDrinkBtn';
import StartDrinkBtn from '../components/DetailsDrinkPage/StartDrinkBtn';
import UlDrinks from '../components/DetailsDrinkPage/UlDrinks';

const copy = require('clipboard-copy');

function DetailsRecipeDrink({ match }) {
  const [drink, setDrink] = useState();
  const [copyLink, setCopyLink] = useState({ isLinkCopied: false });

  useEffect(() => {
    const { id } = match.params;
    async function getDrink() {
      const drinkResult = await getDrinksById(id);
      console.log(drinkResult);
      setDrink(drinkResult);
    }
    getDrink();
  }, []);

  const location = useLocation();

  function handleClickShare() {
    setCopyLink({ isLinkCopied: true });
    const { pathname } = location;
    const link = `http://localhost:3000${pathname}`;
    copy(link);
  }

  if (drink) {
    const entries = Object.entries(drink);
    const { id: idOfParams } = match.params;
    const id = 0;
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

        <FavoriteDrinkBtn drink={ drink } />

        <p data-testid="recipe-category">{ drink.strAlcoholic }</p>
        <UlDrinks entriesOfProps={ entries } id={ id } />
        <p data-testid="instructions">{ drink.strInstructions }</p>
        <RecomendationCarousel isRecipeFood={ false } />
        <StartDrinkBtn id={ idOfParams } />

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

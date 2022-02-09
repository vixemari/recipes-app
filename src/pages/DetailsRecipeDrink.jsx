import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getDrinksById } from '../service/fetchApi';
import shareIcon from '../images/shareIcon.svg';
import RecomendationCarousel from '../components/RecomendationCarousel';
import FavoriteDrinkBtn from '../components/DetailsDrinkPage/FavoriteDrinkBtn';
import StartDrinkBtn from '../components/DetailsDrinkPage/StartDrinkBtn';
import UlDrinks from '../components/DetailsDrinkPage/UlDrinks';
import DetailsStyle from '../style/Details';

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
      <DetailsStyle>
        <div className="divImg">
          <img
            className="image"
            src={ drink.strDrinkThumb }
            alt="drink-Details"
            data-testid="recipe-photo"
            width="100px"
          />
        </div>
        <div className="divBtnIcon">
          <h1 className="title" data-testid="recipe-title">{ drink.strDrink }</h1>
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
        </div>
        <p className="category" data-testid="recipe-category">{ drink.strAlcoholic }</p>
        <UlDrinks entriesOfProps={ entries } id={ id } />
        <p className="inst" data-testid="instructions">{ drink.strInstructions }</p>
        <RecomendationCarousel isRecipeFood={ false } />
        <StartDrinkBtn id={ idOfParams } />

      </DetailsStyle>
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

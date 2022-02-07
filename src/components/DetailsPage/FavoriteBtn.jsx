import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import { setLocalStorage } from '../../service/setLocalStorage';

function FavoriteBtn({ food }) {
  const [canFavoriteRecipe, setCanFavoriteRecipe] = useState(false);
  const [isFavoriteRecipe, setIsFavoriteRecipe] = useState(false);

  useEffect(() => {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(typeof favoritesStorage);

    if (favoritesStorage !== null && favoritesStorage.length !== 0) {
      if (favoritesStorage.some((recipe) => recipe.id === food.idMeal)) {
        setCanFavoriteRecipe(true);
      }
      const checkIsInStorage = favoritesStorage
        .some((recipe) => recipe.id === food.idMeal);
      setIsFavoriteRecipe(checkIsInStorage);
    }
  }, [canFavoriteRecipe]);

  function removeOfLocalStorage() {
    const favoritesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(food);
    const newLocalStorage = favoritesStorage
      .filter((recipe) => recipe.id !== food.idMeal);
    console.log(newLocalStorage);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newLocalStorage));
    console.log(newLocalStorage);
  }

  function favoriteRecipe(event) {
    event.preventDefault();
    setIsFavoriteRecipe(!isFavoriteRecipe);

    if (canFavoriteRecipe) {
      console.log('remove');
      removeOfLocalStorage();
    } else {
      console.log('adiciona');
      setLocalStorage(food);
    }
    setCanFavoriteRecipe(!canFavoriteRecipe);
  }

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      src={ canFavoriteRecipe ? blackHeartIcon : whiteHeartIcon }
      onClick={ favoriteRecipe }
    >
      {canFavoriteRecipe
        ? (<img src={ blackHeartIcon } alt="blackHeart" />)
        : (<img src={ whiteHeartIcon } alt="whiteHeart" />)}
    </button>
  );
}

FavoriteBtn.propTypes = {
  food: PropTypes.shape.isRequired,
};

export default FavoriteBtn;

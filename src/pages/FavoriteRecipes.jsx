import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const FAVORITE_RECIPES = 'Favorite Recipes';
  const [getFavoriteRecipes, setGetFavoriteRecipes] = useState([]);
  const [copyLink, setCopyLink] = useState(false);

  function handleClickShare(recipe) {
    setCopyLink(true);
    let link;
    if (recipe.type === 'drink') {
      link = `http://localhost:3000/drinks/${recipe.id}`;
    } else {
      link = `http://localhost:3000/foods/${recipe.id}`;
    }
    copy(link);
  }

  useEffect(() => {
    const favoritesRecipesByStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favoritesRecipesByStorage);
    setGetFavoriteRecipes(favoritesRecipesByStorage);
  }, []);

  return (
    <div>
      <Header title={ FAVORITE_RECIPES } btnSearch={ false } />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drink</button>

      {getFavoriteRecipes.map((recipe, index) => (
        <div key={ recipe.id }>
          {/* { `/foods/${recipe.id}` } */}
          <Link
            to={ recipe.type === 'food'
              ? `/foods/${recipe.id}` : `/drinks/${recipe.id}` }
          >
            <img
              data-testid={ `${index}-horizontal-image` }
              width="100px"
              src={ recipe.image }
              alt="recipeImage"
            />
            <p
              data-testid={ `${index}-${recipe.nationality}-horizontal-tag` }
            >
              { recipe.nationality }
            </p>
            <p
              data-testid={ `${index}-${recipe.alcoholicOrNot}-horizontal-tag` }
            >
              { recipe.alcoholicOrNot }
            </p>
            <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</p>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => handleClickShare(recipe) }
          >
            <img src={ shareIcon } alt="share icon" />
          </button>
          {copyLink && <p>Link copied!</p>}
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            // src={ canFavoriteRecipe ? blackHeartIcon : whiteHeartIcon }
            // onClick={ favoriteRecipe }
          >
            <img src={ blackHeartIcon } alt="blackHeart" />
            {/* {canFavoriteRecipe
              ? (<img src={ blackHeartIcon } alt="blackHeart" />)
              : (<img src={ whiteHeartIcon } alt="whiteHeart" />)} */}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ButtonsOfExplore from '../components/ButtonsOfExplore';
import IndexFooter from '../components/footer/IndexFooter';

function ExploreDrinks() {
  const EXPLORE_DRINKS = 'Explore Drinks';
  const [drinkRandom, setDrinkRandom] = useState(0);

  useEffect(() => {
    const getRandomDrink = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      return setDrinkRandom(data.drinks[0].idDrink);
    };
    getRandomDrink();
  }, []);
  const randomId = drinkRandom;

  function random() {
    if (randomId > 0) {
      return (
        <Link to={ `/drinks/${randomId}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </Link>
      );
    }
  }
  return (
    <div>
      <Header title={ EXPLORE_DRINKS } btnSearch={ false } />
      <ButtonsOfExplore btnNationality={ false } />
      {random()}
      <IndexFooter />
    </div>
  );
}

export default ExploreDrinks;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ButtonsOfExplore from '../components/ButtonsOfExplore';
import IndexFooter from '../components/footer/IndexFooter';
// import { randomExploreFoods } from '../service/fetchApi';

function ExploreFoods() {
  const EXPLORE_FOODS = 'Explore Foods';
  const [mealRandom, setMealRandom] = useState(0);

  useEffect(() => {
    const getRandomMeal = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      return setMealRandom(data.meals[0].idMeal);
    };
    getRandomMeal();
  }, []);
  const randomId = mealRandom;

  function random() {
    if (randomId > 0) {
      return (
        <Link to={ `/foods/${randomId}` }>
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
      <Header title={ EXPLORE_FOODS } btnSearch={ false } />
      <ButtonsOfExplore btnNationality isFood />
      {random()}
      <IndexFooter />
    </div>
  );
}

export default ExploreFoods;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';

function Explore() {
  const [redirect, setRedirect] = useState({ canRedirectToExploreFoods: false,
    canRedirectToExploreDrinks: false });
  const EXPLORE = 'Explore';

  function handleClickFoods() {
    setRedirect({ ...redirect, canRedirectToExploreFoods: true });
  }

  function handleClickDrinks() {
    setRedirect({ ...redirect, canRedirectToExploreDrinks: true });
  }

  return (
    <div>
      <Header title={ EXPLORE } btnSearch={ false } />
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ handleClickFoods }
      >
        Explore Foods
      </button>

      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ handleClickDrinks }
      >
        Explore Drinks
      </button>

      <IndexFooter />
      {redirect.canRedirectToExploreFoods && <Redirect to="/explore/foods" />}
      {redirect.canRedirectToExploreDrinks && <Redirect to="/explore/drinks" />}

    </div>
  );
}

export default Explore;

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';
import { randonExploreFoods } from '../service/fetchApi';

function Explore() {
  const [redirect, setRedirect] = useState({ canRedirectToExploreFoods: false,
    canRedirectToExploreDrinks: false });
  const EXPLORE = 'Explore';
  // const history = useHistory();
  const [surprise, setSurprise] = useState([]);

  function handleClickFoods() {
    setRedirect({ ...redirect, canRedirectToExploreFoods: true });
  }

  function handleClickDrinks() {
    setRedirect({ ...redirect, canRedirectToExploreDrinks: true });
  }
  function handleClickSurprise() {

  }
  useEffect(() => {
    async function randomFoods() {
      const randomResult = await randonExploreFoods();
      setSurprise(randomResult);
    }
    randomFoods();
  }, []);

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
      {
        surprise.map(({ idMeal }) => (
          <div key={ idMeal }>
            <Link to={ `/explore/foods${idMeal}/` }>
              <button
                type="submit"
                data-testid="explore-surprise"
                onClick={ handleClickSurprise }
              >
                Surprise Me!

              </button>
            </Link>
          </div>
        ))
      }

    </div>
  );
}

export default Explore;

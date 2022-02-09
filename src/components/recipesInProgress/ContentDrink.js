import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';
import InProgressImg from './components/InProgressImg';
import InProgressIcon from './components/InProgressIcon';
import InProgressInstructions from './components/InProgressInstructions';
import InProgressCheckboxIngredient from './components/InProgressCheckBoxIngredient';
import InProgressBtnFinish from './components/InProgressBtnFinish';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

export default function ContentDrink() {
  const {
    setdrinkId,
    contentDrinkId,
    isFetch,
  } = useContext(Context);

  const [drinksForMap, setDrinksForMap] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    setdrinkId(id);
  }, [setdrinkId, id]);

  useEffect(() => {
    if (drinksForMap.length === 0) {
      setDrinksForMap(contentDrinkId);
    }
  }, [contentDrinkId, drinksForMap]);

  return (
    <div>
      {
        isFetch ? 'Loading...' : drinksForMap.map((content) => (
          <div key={ content.strDrink }>
            <div>
              <InProgressImg
                img={ content.strDrinkThumb }
                name={ content.strDrink }
                category={ content.strCategory }
                alcoholic={ content.strAlcoholic }
              />
              <InProgressIcon
                whiteHeartIcon={ whiteHeartIcon }
                blackHeartIcon={ blackHeartIcon }
                shareIcon={ shareIcon }
              />
              <InProgressCheckboxIngredient
                value={ content }
              />
            </div>
            <div>
              <InProgressInstructions
                text={ content.strInstructions }
              />
            </div>
          </div>
        ))
      }
      <div>
        <InProgressBtnFinish />
      </div>
    </div>
  );
}

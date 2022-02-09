import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import InProgressIcon from './components/InProgressIcon';
import InProgressImg from './components/InProgressImg';
import InProgressInstructions from './components/InProgressInstructions';
import InProgressCheckboxIngredient from './components/InProgressCheckBoxIngredient';
import RecipeBtnFinish from './components/InProgressBtnFinish';
import Progress from '../../style/Progress';

export default function Content() {
  const { setMealId, contentMeal, isFetch } = useContext(Context);
  const [foodForMap, setFoodFormMap] = useState(contentMeal);
  const { id } = useParams();

  useEffect(() => {
    setMealId(id);
  }, [id, setMealId]);

  useEffect(() => {
    if (foodForMap.length === 0) {
      setFoodFormMap(contentMeal);
    }
  }, [foodForMap, contentMeal]);

  return (
    <Progress>
      {
        isFetch ? 'Loading...' : foodForMap.map((content) => (
          <div key={ content.strMeal }>
            <div>
              <InProgressImg
                img={ content.strMealThumb }
                name={ content.strMeal }
                category={ content.strCategory }
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
        <RecipeBtnFinish />
      </div>
    </Progress>
  );
}

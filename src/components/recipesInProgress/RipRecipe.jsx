import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';
import shareIcon from '../../images/shareIcon.svg';
import RecipesInProgressIcons from './RecipesInProgressIcons';
import RecipesInProgressImg from './RecipesInProgressImg';
import RecipesInProgressInstructions from './RecipesInProgressInstructions';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Test from './Teste';
import RecipeBtnFinish from './RecipeBtnFinish';

export default function Content() {
  const { setMealId, idResultMeal, isFetch } = useContext(Context);
  const [valuesId, setValuesId] = useState(idResultMeal);
  const { id } = useParams();
  setMealId(id);

  useEffect(() => {
    if (valuesId.length === 0) {
      setValuesId(idResultMeal);
    }
  }, [valuesId, idResultMeal]);

  return (
    <div>
      {
        isFetch ? 'Loading...' : valuesId.map((e, index) => (
          <div key={ index }>
            <div>
              <RecipesInProgressImg
                img={ e.strMealThumb }
                name={ e.strMeal }
                category={ e.strCategory }
              />
              <RecipesInProgressIcons
                whiteHeartIcon={ whiteHeartIcon }
                blackHeartIcon={ blackHeartIcon }
                shareIcon={ shareIcon }
              />
              <Test
                value={ e }
              />
            </div>
            <div>
              <RecipesInProgressInstructions
                text={ e.strInstructions }
              />
            </div>
          </div>
        ))
      }
      <div>
        <RecipeBtnFinish />
      </div>
    </div>
  );
}

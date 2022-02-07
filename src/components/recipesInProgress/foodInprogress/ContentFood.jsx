import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../../context/Context';
import shareIcon from '../../../images/shareIcon.svg';
import InProgressIcon from './InProgressIcon';
import InProgressImg from './InProgressImg';
import InProgressInstructions from './InProgressInstructions';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import InProgressCheckboxIngredient from './InProgressCheckBoxIngredient';
import RecipeBtnFinish from './InProgressBtnFinish';

export default function Content() {
  const { setMealId, idResultMeal, isFetch } = useContext(Context);
  const [valuesId, setValuesId] = useState(idResultMeal);
  const { id } = useParams();

  useEffect(() => {
    setMealId(id);
  }, [id, setMealId]);

  useEffect(() => {
    if (valuesId.length === 0) {
      setValuesId(idResultMeal);
    }
  }, [valuesId, idResultMeal]);

  return (
    <div>
      {
        isFetch ? 'Loading...' : valuesId.map((e) => (
          <div key={ e.strMeal }>
            <div>
              <InProgressImg
                img={ e.strMealThumb }
                name={ e.strMeal }
                category={ e.strCategory }
              />
              <InProgressIcon
                whiteHeartIcon={ whiteHeartIcon }
                blackHeartIcon={ blackHeartIcon }
                shareIcon={ shareIcon }
              />
              <InProgressCheckboxIngredient
                value={ e }
              />
            </div>
            <div>
              <InProgressInstructions
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

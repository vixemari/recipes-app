import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

export default function Teste({ value }) {
  function getMeasures(entries) {
    const currentMeasure = [];
    entries.forEach((entrie) => {
      if (entrie[0].includes('strMeasure')
        && entrie[1] !== null && entrie[1] !== '') {
        currentMeasure.push(entrie[1]);
      }
    });
    return currentMeasure;
  }

  let idIndex = 0;
  const entries = Object.entries(value);

  // const saveProgressIngredient = () => {
  //   const { idMeal } = value;
  //   // const mealId = idMeal;
  //   console.log(idMeal);
  //   localStorage.setItem('inProgressRecipes', {
  //     coctails: {

  //     },
  //     meals: {
  //       idMeal: '10',
  //     },
  //   });

  //   console.log(localStorage.getItem('inProgressRecipes'));
  // };

  const handleClick = ({ id /* checked  */ }) => {
    const getLabel = document.getElementById(`${id}`);
    if (getLabel.className === '') {
      getLabel.className = 'risk';
    } else {
      getLabel.className = '';
    }
    // saveProgressIngredient();
  };

  return (
    <div>
      Ingredients:
      {entries.map((entrie) => {
        getMeasures(entries);
        if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
          if (entrie[0].includes('strIngredient1')) {
            idIndex = 0;
          } else {
            idIndex += 1;
          }
          const measures = getMeasures(entries);
          return (
            <div key={ idIndex }>
              <label
                htmlFor={ idIndex }
                data-testid={ `${idIndex}-ingredient-name-and-measure` }
                id={ idIndex }
              >
                <input
                  name="checkIngredient"
                  type="checkbox"
                  id={ idIndex }
                  onClick={ (t) => handleClick(t.target) }
                />
                {`${entrie[1]} - ${measures[idIndex]}`}

              </label>
            </div>
          );
        }
        return '';
      })}
    </div>
  );
}

Teste.propTypes = {
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

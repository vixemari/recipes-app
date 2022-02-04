import React from 'react';
import PropTypes from 'prop-types';

export default function RecipiesInProgressIngred({ valor }) {
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

  let id = 0;
  const entries = Object.entries(valor);
  console.log(entries);
  return (
    <div>
      <h1> Ingredients  </h1>
      <ul>
        {valor.map((entrie) => {
          getMeasures(entries);
          if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
            if (entrie[0].includes('strIngredient1')) {
              id = 0;
            } else {
              id += 1;
            }
            const measures = getMeasures(entries);
            return (
              <li
                data-testid={ `${id}-ingredient-name-and-measure` }
              >
                {`${entrie[1]} - ${measures[id]}`}
              </li>
            );
          }
          return '';
        })}
      </ul>

    </div>
  );
}

RecipiesInProgressIngred.propTypes = {
  valor: PropTypes.shape.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

function UlDrinks({ entriesOfProps, id }) {
  function getMeasures(entries) {
    const currentMeasure = entries.reduce((acc, entrie) => {
      if (entrie[0].includes('strMeasure')
        && entrie[1] !== null && entrie[1] !== '') {
        acc.push(entrie[1]);
      }
      return acc;
    }, []);
    return currentMeasure;
  }

  return (
    <ul>
      Ingredients:
      {entriesOfProps.map((entrie) => {
        getMeasures(entriesOfProps);
        if (entrie[0].includes('strIngredient')
        && entrie[1] !== null && entrie[1] !== '') {
          if (entrie[0].includes('strIngredient1')) {
            id = 0;
          } else {
            id += 1;
          }
          const measures = getMeasures(entriesOfProps);
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
  );
}

UlDrinks.propTypes = {
  entriesOfProps: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default UlDrinks;

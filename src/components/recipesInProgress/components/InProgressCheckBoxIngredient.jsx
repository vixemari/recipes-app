import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

export default function InProgressCheckBoxIngredient({ value }) {
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
  const MAGIC_NUMBER = -1;

  let idIndex = MAGIC_NUMBER;
  const entries = Object.entries(value);

  const handleClick = ({ id }) => {
    const getLabel = document.getElementById(`${id}`);
    if (getLabel.className === '') {
      getLabel.className = 'risk';
    } else {
      getLabel.className = '';
    }
  };

  return (
    <div>
      Ingredients:
      {entries.map((entrie) => {
        getMeasures(entries);
        if (entrie[0].includes('strIngredient')
            && entrie[1] !== null && entrie[1] !== '') {
          if (entrie[0].includes(entrie[1])) {
            idIndex = 0;
          } else {
            idIndex += 1;
          }
          const measures = getMeasures(entries);
          return (
            <div key={ entrie[1] }>
              <label
                htmlFor={ idIndex }
                data-testid={ `${idIndex}-ingredient-step` }
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

InProgressCheckBoxIngredient.propTypes = {
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

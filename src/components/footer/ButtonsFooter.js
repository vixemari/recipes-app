import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './footer.css';

export default function ButtonsFooter() {
  const history = useHistory();
  return (
    <div>
      <Button
        onClick={ () => history.push('/drinks') }
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        variant="outline-primary"
      >
        <img src={ drinkIcon } alt="drink-icon" />
      </Button>
      {' '}
      <Button
        onClick={ () => history.push('/explore"') }
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        variant="outline-primary"
      >
        <img src={ exploreIcon } alt="explore-icon" />
      </Button>
      {' '}
      <Button
        onClick={ () => history.push('/foods') }
        src={ mealIcon }
        variant="outline-primary"
        data-testid="food-bottom-btn"
      >
        <img src={ mealIcon } alt="mealicon-icon" />
      </Button>
      {' '}
    </div>

  );
}

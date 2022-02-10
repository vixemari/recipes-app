import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Context from '../../../context/Context';

export default function InProgressBtnFinish() {
  const history = useHistory();
  const { disableBtn } = React.useContext(Context);

  return (
    <div>
      <Button
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
        variant="outline-success"
        disabled={ disableBtn }
      >
        Finish Recipe

      </Button>
    </div>
  );
}

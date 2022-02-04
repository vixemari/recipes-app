import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function RecipeBtnFinish() {
  const history = useHistory();

  return (
    <div>
      <Button
        onClick={ () => history.push('/done-recipes') }
        variant="outline-success"
      >
        Finish Recipe

      </Button>
    </div>
  );
}

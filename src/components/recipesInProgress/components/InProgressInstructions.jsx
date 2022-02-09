import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
// subindo pr 2
export default function InProgressInstructions({ text }) {
  return (
    <div
      className="divInst"
      data-testid="instructions"
    >
      <Card
        bg="secondary"
        text="white"
        style={ { width: '18rem' } }
        className="mb-2"
      >
        <Card.Header
          style={ { fontSize: '20px', textAlign: 'center', backgroundColor: '#5B4500' } }
        >
          preparation instructions

        </Card.Header>
        <Card.Body
          style={ { backgroundColor: '#5B4500' } }
        >
          <Card.Text>
            { text }
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}

InProgressInstructions.propTypes = {
  text: PropTypes.string.isRequired,
};

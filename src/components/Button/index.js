import React from 'react';
import { Button } from 'react-bootstrap';

import './Button.css';

function CustomButton(props) {

  return (
    <div className="button">
      <Button 
        variant="outline-primary"
      >
        {props.text}
      </Button>
    </div>
  );
}

export default CustomButton;
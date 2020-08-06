import React from 'react';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import PropTypes from 'prop-types';


function FancyButton(props) {
  const { ariaLabel, ...otherProps} = props;
  return (
    <Button {...otherProps} aria-label={ariaLabel}/>
  )
}

FancyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired
}

export default FancyButton;
import React from 'react';
import { Button } from '@trussworks/react-uswds';
import PropTypes from 'prop-types';
import '@trussworks/react-uswds/lib/uswds.css';


function FancyButton(props) {
  const { ariaLabel, ...otherProps} = props;
  return (
    <Button {...otherProps} aria-label={ariaLabel}/>
  )
}

FancyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.bool,
  secondary: PropTypes.bool,
  base: PropTypes.bool
}

export default FancyButton;
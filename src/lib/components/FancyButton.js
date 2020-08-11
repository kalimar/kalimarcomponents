import React from 'react';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import PropTypes from 'prop-types';

const checkAriaDisabled = (disabledProp) => disabledProp ? "true" : "false";

function FancyButton(props) {
  const { disabled, ...otherProps} = props;

  return (
    <Button {...otherProps} disabled={disabled} aria-disabled={checkAriaDisabled(disabled)}/>
  )
}

FancyButton.propTypes = {
  disabled: PropTypes.bool
}

export default FancyButton;